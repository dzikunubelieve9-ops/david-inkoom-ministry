'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Tv,
  Calendar,
  Image as ImageIcon,
  HeartHandshake,
  Users,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

interface AdminSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({
  activeTab = 'dashboard',
  onTabChange,
  isOpen = false,
  onClose,
}: AdminSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' });
    } catch {
      // Ignore network errors on logout
    }
    sessionStorage.removeItem('dmin_admin_token');
    sessionStorage.removeItem('dmin_admin_user');
    router.push('/admin/login');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
    { id: 'sermons', label: 'Sermons', icon: Tv, href: '/admin/dashboard?tab=sermons' },
    { id: 'events', label: 'Events', icon: Calendar, href: '/admin/dashboard?tab=events' },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon, href: '/admin/dashboard?tab=gallery' },
    { id: 'donations', label: 'Donations', icon: HeartHandshake, href: '/admin/dashboard?tab=donations' },
    { id: 'members', label: 'Members', icon: Users, href: '/admin/dashboard?tab=members' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/admin/dashboard?tab=settings' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-black/95 border-r border-[#FFC700]/30 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Branding */}
        <div>
          <div className="h-20 px-6 border-b border-[#FFC700]/20 flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-[#FFC700] flex items-center justify-center shrink-0">
                <img
                  src="/assets/logo.jpg"
                  alt="iD Logo"
                  className="w-full h-full object-contain"
                  onError={(e: any) => {
                    e.currentTarget.src = 'assets/logo.jpg';
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <span className="font-serif font-black text-xs uppercase tracking-wider text-white block truncate">
                  Min David Inkoom
                </span>
                <span className="text-[10px] uppercase font-bold text-[#FFC700] tracking-widest block truncate">
                  Admin Panel
                </span>
              </div>
            </Link>

            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden text-slate-400 hover:text-white p-1"
                aria-label="Close Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (onTabChange) onTabChange(item.id);
                    if (onClose) onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFC700] to-[#E5A900] text-black shadow-[0_0_20px_rgba(255,199,0,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-[#FFC700]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section with Logout Button */}
        <div className="p-4 border-t border-[#FFC700]/20 space-y-3">
          <div className="px-4 py-2 rounded-xl bg-[#0B0F19] border border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Session:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Active
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white hover:bg-red-950/50 border border-transparent hover:border-red-500/30 transition-all"
          >
            <LogOut className="w-4 h-4 text-red-400 shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
