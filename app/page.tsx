'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Radio,
  Heart,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Crown,
  Zap,
  Anchor,
  Shield,
  Award,
} from 'lucide-react';
import AdminFooterButton from '@/components/admin/AdminFooterButton';

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleBookingClick = () => {
    const waUrl = 'https://wa.me/233257112267?text=Shalom%20Min%20David%20Inkoom%20I%20want%20to%20book%20you%20for%20a%20program';
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050F23] text-slate-100 flex flex-col font-sans selection:bg-[#7A0000] selection:text-[#FFC700]">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#1A1E5A] via-[#580000] to-[#071630] border-b border-[#FFC700]/25 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-bold text-[#FFE27A] uppercase tracking-wider flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-red-400" />
              GLOBAL WORSHIP HUB
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-200">
              Next Live: <strong className="text-[#FFC700]">Mi Noche Mi Adoracion</strong> — 1st Nov 2026, 3:00 PM GMT
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#FFE27A] font-mono">025 711 2267</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-[#1A1E5A]/85 backdrop-blur-md border-b border-[#FFC700]/25 px-4 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#FFC700] p-1 flex items-center justify-center shadow-[0_0_20px_rgba(255,199,0,0.35)] group-hover:scale-105 transition-transform">
            <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-serif font-black text-base sm:text-lg tracking-wider text-white block">
              MIN DAVID INKOOM
            </span>
            <span className="text-[10px] uppercase font-bold text-[#FFC700] tracking-widest block">
              GLOBAL MINISTRY • OFFICIAL PORTAL
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link href="/" className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-[#FFC700]">
            Home
          </Link>
          <button onClick={handleBookingClick} className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-[#FFC700]">
            Booking (/book-david)
          </button>
          <a href="/index.html#live" className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-[#FFC700]">
            Live Stream
          </a>
          <a href="/index.html#gallery" className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-[#FFC700]">
            Gallery
          </a>
          <a href="/index.html#give" className="px-3 py-1.5 rounded-lg text-[#FFE27A] hover:text-[#FFC700] flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#FFC700]" />
            Give
          </a>
          <a href="/index.html#press-kit" className="px-3 py-1.5 rounded-lg text-slate-200 hover:text-[#FFC700]">
            Press Kit
          </a>
        </nav>

        {/* WhatsApp Booking Direct Action */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/233257112267?text=Shalom%20Min%20David%20Inkoom%20I%20want%20to%20book%20you%20for%20a%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC700] via-[#E5A900] to-[#D4AF37] text-[#050F23] px-4 py-2.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,199,0,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#050F23]" />
            <span>BOOK: 0257112267</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative min-h-[82vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(26,30,90,0.65)_0%,rgba(122,0,0,0.25)_45%,rgba(5,15,35,0.98)_100%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/30 text-[#FFE27A] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC700]" />
                Prophetic Worship • Holy Ghost Revival • Global Mandate
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Raising A Generation of <br />
                <span className="text-gold-gradient">True Worshippers</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Leading nations into the intimate, life-transforming presence of God through prophetic worship altars, supernatural praise encounters, and Holy Ghost revival.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://wa.me/233257112267?text=Shalom%20Min%20David%20Inkoom%20I%20want%20to%20book%20you%20for%20a%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC700] via-[#E5A900] to-[#D4AF37] text-[#050F23] font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,199,0,0.45)] hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#050F23]" />
                  <span>INVITE MINISTER DAVID (/book-david)</span>
                </a>

                <a
                  href="/index.html#live"
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#1A1E5A] hover:bg-[#7A0000] text-white border border-[#FFC700]/30 font-bold text-xs uppercase tracking-wider transition-all text-center"
                >
                  Open Live Stream
                </a>
              </div>
            </div>

            {/* Right Hero Image (Photo 0: White shirt with Yamaha keyboards) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#FFC700]/50 shadow-[0_0_50px_rgba(255,199,0,0.25)] bg-[#071630]">
                <img
                  src="/assets/media_1789830994057.jpg"
                  alt="Minister David Inkoom on stage with Yamaha keyboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050F23] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-[#FFC700] text-[#050F23] px-2 py-0.5 rounded">
                    PROPHETIC PSALMIST
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">Minister David Inkoom</h3>
                  <p className="text-xs text-slate-300">Divine Impact Worship Center • DIWC Sanctuary</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Sponsors Marquee (Including MAXDALI28) */}
        <section className="py-8 bg-black/60 border-y border-[#FFC700]/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FFC700]/80">
              OFFICIAL KINGDOM PARTNERS & SPONSORS
            </span>
          </div>
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-12 animate-marquee">
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#FFC700]" /> PRIME CONCEPTS
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFC700]" /> MAXDALI28
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Anchor className="w-4 h-4 text-blue-400" /> SG FREIGHT GHANA
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFC700]" /> MINISTER BERNARD
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-400" /> SETORWU ENTERPRISE
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFC700]" /> MILKA EMPIRE
              </span>
              {/* Duplicate for smooth looping */}
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#FFC700]" /> PRIME CONCEPTS
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFC700]" /> MAXDALI28
              </span>
              <span className="font-serif text-sm font-bold text-slate-300 flex items-center gap-2">
                <Anchor className="w-4 h-4 text-blue-400" /> SG FREIGHT GHANA
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="bg-[#050F23] border-t border-[#FFC700]/25 pt-12 pb-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center border border-[#FFC700]">
                  <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-serif font-bold text-white text-sm">MIN DAVID INKOOM MINISTRY</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Divine Impact Worship Center, Gbetsile U.S Junction, Behind Family House, Greater Accra, Ghana.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif font-bold text-white text-sm block">Direct Altar Contact</span>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#FFC700]" />
                WhatsApp: <strong className="text-white">+233 25 711 2267</strong>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-red-400" />
                Davidinkoomministry@gmail.com
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif font-bold text-white text-sm block">Direct Offering Channels</span>
              <p className="text-slate-400 text-[11px]">MTN MoMo: 025 711 2267</p>
              <p className="text-slate-400 text-[11px]">Telecel Cash: 050 009 8877</p>
              <p className="text-slate-400 text-[11px]">Fidelity Bank Ghana: 2030763999318</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 MIN DAVID INKOOM MINISTRY. Official Global Portal.</p>
            <div className="flex items-center gap-4">
              <span className="text-[#FFC700] italic font-serif">"Psalm 95:1 — Come, let us sing for joy to the Lord!"</span>
              {/* Hidden Admin Button in Footer */}
              <AdminFooterButton />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
