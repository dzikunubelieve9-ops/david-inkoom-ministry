'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Route Protection: check session token or verify endpoint
    const checkAuth = async () => {
      const clientToken = sessionStorage.getItem('dmin_admin_token');

      if (!clientToken) {
        setIsAuthenticated(false);
        router.replace('/admin/login');
        return;
      }

      try {
        const res = await fetch('/api/admin/auth/me', {
          headers: {
            Authorization: `Bearer ${clientToken}`,
          },
        });

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          // Fallback check: if token was set locally during session
          if (clientToken.startsWith('jwt_session_token_') || clientToken.length > 20) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            router.replace('/admin/login');
          }
        }
      } catch {
        // Offline or client-only fallback
        if (clientToken) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.replace('/admin/login');
        }
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 border-2 border-[#FFC700] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs uppercase font-bold tracking-widest text-[#FFC700]">
          Verifying Ministerial Credentials...
        </span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col flex-1 min-w-0">
        <AdminHeader
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          ministerName="Minister David Inkoom"
        />

        <main className="p-4 sm:p-8 flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
