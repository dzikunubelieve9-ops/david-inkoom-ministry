'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

interface AdminFooterButtonProps {
  className?: string;
}

export default function AdminFooterButton({ className = '' }: AdminFooterButtonProps) {
  const router = useRouter();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Reveal button or navigate on key combination (Ctrl + Shift + A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsRevealed((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`inline-block ${className}`}>
      <Link
        href="/admin/login"
        id="admin-footer-btn"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold text-slate-400 hover:text-gold-divine bg-black/40 hover:bg-black/90 border border-transparent hover:border-gold-divine/40 transition-all duration-300 cursor-pointer ${
          isRevealed ? 'opacity-100 ring-1 ring-gold-divine/60' : 'opacity-0 hover:opacity-100'
        }`}
        title="Restricted Administrative Access (Ctrl + Shift + A)"
        aria-label="Admin Access"
      >
        <Lock className="w-3 h-3 text-gold-divine shrink-0" />
        <span className="tracking-wider uppercase">Admin</span>
      </Link>
    </div>
  );
}
