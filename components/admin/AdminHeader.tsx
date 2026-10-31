'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Menu, LogOut, ShieldCheck, UserCheck } from 'lucide-react';

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
  ministerName?: string;
}

export default function AdminHeader({
  onToggleSidebar,
  ministerName = 'Minister David Inkoom',
}: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' });
    } catch {
      // Ignore network errors
    }
    sessionStorage.removeItem('dmin_admin_token');
    sessionStorage.removeItem('dmin_admin_user');
    router.push('/admin/login');
  };

  return (
    <header className="sticky top-0 z-30 h-20 bg-black/90 backdrop-blur-xl border-b border-[#FFC700]/30 px-4 sm:px-8 flex items-center justify-between">
      {/* Left: Mobile Toggle & Welcome Message */}
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5"
            aria-label="Open Sidebar"
          >
            <Menu className="w-6 h-6 text-[#FFC700]" />
          </button>
        )}

        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC700]">
              Authenticated Administrative Altar
            </span>
          </div>
          <h2 className="text-base sm:text-xl font-black text-white font-serif flex items-center gap-2">
            <span>Welcome {ministerName}</span>
            <ShieldCheck className="w-4 h-4 text-[#FFC700] inline-block" />
          </h2>
        </div>
      </div>

      {/* Right: User Avatar & Logout Button */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0F19] border border-white/10 text-xs text-slate-300">
          <UserCheck className="w-3.5 h-3.5 text-[#FFC700]" />
          <span className="font-semibold">admin@davidinkoom.org</span>
        </div>

        <button
          onClick={handleLogout}
          id="admin-top-logout-btn"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/80 hover:bg-red-800 text-red-200 hover:text-white border border-red-500/40 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}
