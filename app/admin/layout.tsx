import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Portal | Min David Inkoom Ministry',
  description: 'Secure Administrative Control Panel for Min David Inkoom Ministry',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-slate-100 antialiased selection:bg-[#FFC700] selection:text-black">
      {children}
    </div>
  );
}
