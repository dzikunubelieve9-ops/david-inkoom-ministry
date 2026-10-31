'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in session
    const token = typeof window !== 'undefined' ? sessionStorage.getItem('dmin_admin_token') : null;
    if (token) {
      router.replace('/admin/dashboard');
    } else {
      router.replace('/admin/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#FFC700] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
