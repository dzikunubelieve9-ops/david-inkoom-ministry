import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminJWT } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const cookieToken = req.cookies.get('dmin_admin_jwt')?.value;
  const authHeader = req.headers.get('authorization');
  const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

  const token = cookieToken || bearerToken;

  if (!token) {
    return NextResponse.json(
      { authenticated: false, message: 'No active session' },
      { status: 401 }
    );
  }

  const user = verifyAdminJWT(token);

  if (!user) {
    return NextResponse.json(
      { authenticated: false, message: 'Invalid or expired session token' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    authenticated: true,
    user,
  });
}
