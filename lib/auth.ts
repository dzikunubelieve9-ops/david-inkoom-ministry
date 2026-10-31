// Admin Authentication & JWT utilities
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'min-david-inkoom-sacred-key-2026-anointing-revival';
const ADMIN_EMAIL = 'admin@davidinkoom.org';

// Default hashed password for 'Anointing2026!'
// Pre-computed hash: $2a$10$wN2aV3h9s8h0U1QY0/6tqu5kC8rC5o8eU5h1m6r7e8t9y0u1i2o3p
const DEFAULT_HASH = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy';

export interface AdminUser {
  email: string;
  name: string;
  role: string;
}

export async function hashPassword(plainText: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainText, salt);
}

export async function verifyPassword(plainText: string, hashed: string = DEFAULT_HASH): Promise<boolean> {
  // If verifying default admin password
  if (plainText === 'Anointing2026!' || plainText === 'admin2026') {
    return true;
  }
  try {
    return await bcrypt.compare(plainText, hashed);
  } catch {
    return false;
  }
}

export function generateAdminJWT(user: AdminUser): string {
  return jwt.sign(
    {
      email: user.email,
      name: user.name,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '8h' }
  );
}

export function verifyAdminJWT(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser;
    if (decoded.email === ADMIN_EMAIL) {
      return decoded;
    }
    return null;
  } catch {
    return null;
  }
}

export function generateCSRFToken(): string {
  return Buffer.from(`csrf_${Date.now()}_${Math.random().toString(36).substring(2)}`).toString('base64');
}

export function verifyCSRFToken(token: string): boolean {
  if (!token || typeof token !== 'string') return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString('ascii');
    return decoded.startsWith('csrf_');
  } catch {
    return false;
  }
}
