import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, generateAdminJWT, verifyCSRFToken } from '@/lib/auth';

const ADMIN_EMAIL = 'admin@davidinkoom.org';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, csrfToken } = body;

    // 1. Verify CSRF Token if passed
    if (csrfToken && !verifyCSRFToken(csrfToken)) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired CSRF token' },
        { status: 403 }
      );
    }

    // 2. Validate Email
    if (!email || email.trim().toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized administrative email address' },
        { status: 401 }
      );
    }

    // 3. Verify Password using bcrypt
    const isPasswordValid = await verifyPassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid password credentials' },
        { status: 401 }
      );
    }

    // 4. Generate JWT Session Token
    const user = {
      email: ADMIN_EMAIL,
      name: 'Minister David Inkoom',
      role: 'superadmin',
    };

    const token = generateAdminJWT(user);

    // 5. Construct response with HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful',
      token,
      user,
    });

    response.cookies.set('dmin_admin_jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
