'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Users,
  Eye,
  Calendar,
  Gift,
  Tv,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  AlertTriangle,
  Plus,
  RefreshCw,
  ExternalLink,
  Shield,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const searchParams = useSearchParams();
  const tabFromQuery = searchParams.get('tab') || 'dashboard';
  const [currentTab, setCurrentTab] = useState(tabFromQuery);

  useEffect(() => {
    if (tabFromQuery) {
      setCurrentTab(tabFromQuery);
    }
  }, [tabFromQuery]);

  // Sample data states
  const [bookings] = useState([
    {
      id: 'BK-101',
      date: '2026-11-01',
      name: 'Elder Samuel Quaye',
      church: 'DIWC Main Auditorium',
      location: 'Gbetsile',
      honorarium: 'GHS 1,500',
      status: 'Approved',
      type: 'Flagship Gathering',
    },
    {
      id: 'BK-102',
      date: '2026-10-25',
      name: 'Pastor Evans Lartey',
      church: 'Encounter Revival Altar',
      location: 'Kumasi',
      honorarium: 'GHS 1,000 + Hotel',
      status: 'Approved',
      type: 'Campus Revival',
    },
    {
      id: 'BK-103',
      date: '2026-11-08',
      name: 'Rev. Emmanuel Darko',
      church: 'Grace Baptist Center',
      location: 'Accra',
      honorarium: '$300 USD',
      status: 'Pending',
      type: 'Worship Conference',
    },
    {
      id: 'BK-104',
      date: '2026-10-18',
      name: 'Deacon Kwesi Mensah',
      church: 'Faith Temple Sanctuary',
      location: 'Takoradi',
      honorarium: 'GHS 800',
      status: 'Conflict',
      type: 'Sunday Anointing',
    },
  ]);

  return (
    <div className="space-y-8">
      {/* Tab Switcher for Quick Access */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#FFC700]/20 pb-4">
        {[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'sermons', label: 'Sermons' },
          { id: 'events', label: 'Events' },
          { id: 'gallery', label: 'Gallery' },
          { id: 'donations', label: 'Donations' },
          { id: 'members', label: 'Members' },
          { id: 'settings', label: 'Settings' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setCurrentTab(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              currentTab === t.id
                ? 'bg-[#FFC700] text-black shadow-[0_0_15px_rgba(255,199,0,0.3)]'
                : 'bg-black/60 text-slate-300 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 1. DASHBOARD VIEW */}
      {currentTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Today's Portal Visits</span>
                <Eye className="w-4 h-4 text-[#FFC700]" />
              </div>
              <div className="text-3xl font-black text-white font-serif">1,428</div>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                +18% from yesterday
              </span>
            </div>

            <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Active Worshippers</span>
                <Users className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-3xl font-black text-white font-serif">12,850</div>
              <span className="text-[10px] text-slate-400">Weekly global reach</span>
            </div>

            <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Confirmed Bookings</span>
                <Calendar className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-black text-white font-serif">24 Active</div>
              <span className="text-[10px] text-emerald-400 font-bold">11 Pending review</span>
            </div>

            <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Honorarium Pipeline</span>
                <Gift className="w-4 h-4 text-[#FFC700]" />
              </div>
              <div className="text-2xl font-black text-[#FFC700] font-serif">GHS 24,500+</div>
              <span className="text-[10px] text-slate-400">Across 38 invitations</span>
            </div>
          </div>

          {/* Recent Program Invitations Table */}
          <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Recent Program Invitations</h3>
                <p className="text-xs text-slate-400">Intake from /book-david with honorarium pledges</p>
              </div>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#FFC700]">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#0B0F19] text-[#FFC700] uppercase font-bold text-[10px] border-b border-[#FFC700]/20">
                  <tr>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Host / Organizer</th>
                    <th className="py-3 px-3">Church / Ministry</th>
                    <th className="py-3 px-3">Location</th>
                    <th className="py-3 px-3">Honorarium</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 font-mono text-white">{b.date}</td>
                      <td className="py-3 px-3 font-bold text-slate-200">{b.name}</td>
                      <td className="py-3 px-3 text-[#FFC700]">{b.church}</td>
                      <td className="py-3 px-3">{b.location}</td>
                      <td className="py-3 px-3 font-bold text-emerald-400">{b.honorarium}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            b.status === 'Approved'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                              : b.status === 'Conflict'
                              ? 'bg-red-950 text-red-400 border border-red-500/30'
                              : 'bg-yellow-950 text-yellow-400 border border-yellow-500/30'
                          }`}
                        >
                          {b.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right space-x-1">
                        <a
                          href={`https://wa.me/233257112267?text=Shalom%20${encodeURIComponent(
                            b.name
                          )}%20regarding%20booking%20for%20${encodeURIComponent(b.church)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded bg-[#0B0F19] text-[#FFC700] hover:bg-[#FFC700] hover:text-black font-bold text-[10px] border border-[#FFC700]/30 transition-all"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2. SERMONS CMS VIEW */}
      {currentTab === 'sermons' && (
        <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Livestream & Sermon Replays</h3>
              <p className="text-xs text-slate-400">Broadcast URLs for the Global Worship Hub</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC700] text-black font-bold text-xs uppercase tracking-wider">
              <Plus className="w-3.5 h-3.5" />
              <span>Add Sermon URL</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFC700]">Primary YouTube Live</span>
                <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">ONLINE</span>
              </div>
              <p className="text-sm font-semibold text-white">Sunday Prophetic Worship & Healing Altar</p>
              <p className="text-xs font-mono text-slate-400 truncate">https://www.youtube-nocookie.com/embed/live_stream</p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400">Facebook Live Stream</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-bold">STANDBY</span>
              </div>
              <p className="text-sm font-semibold text-white">Mi Noche Mi Adoracion Special Rebroadcast</p>
              <p className="text-xs font-mono text-slate-400 truncate">https://www.facebook.com/Davidinkoomministry</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. EVENTS VIEW */}
      {currentTab === 'events' && (
        <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Ministry Events & Passes</h3>
              <p className="text-xs text-slate-400">Scheduled crusades and digital ticket registrations</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC700] text-black font-bold text-xs uppercase tracking-wider">
              <Plus className="w-3.5 h-3.5" />
              <span>New Program</span>
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 to-black border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#FFC700] tracking-widest block">FLAGSHIP PROGRAM</span>
              <h4 className="font-serif text-xl font-black text-white">MI NOCHE MI ADORACION 2026</h4>
              <p className="text-xs text-slate-300">1st November 2026 • 3:00 PM GMT • DIWC Auditorium Gbetsile</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              Registrations Active
            </span>
          </div>
        </div>
      )}

      {/* 4. GALLERY VIEW */}
      {currentTab === 'gallery' && (
        <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Stage Photography Gallery</h3>
              <p className="text-xs text-slate-400">10 authentic client photos published on the website</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC700] text-black font-bold text-xs uppercase tracking-wider">
              <Plus className="w-3.5 h-3.5" />
              <span>Upload Stage Photo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['media_1789830994057.jpg', 'media_1789831483087.jpg', 'media_1789831431875.jpg', 'media_1789831124731.jpg'].map((img, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden bg-white/5 border border-white/10 relative group">
                <img src={`/assets/${img}`} alt="Stage worship" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs font-bold text-[#FFC700]">Photo #{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. DONATIONS VIEW */}
      {currentTab === 'donations' && (
        <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Direct Kingdom Giving Records</h3>
              <p className="text-xs text-slate-400">Mobile Money & Bank transfer verification logs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#FFC700]/30 space-y-1">
              <span className="text-xs font-bold text-yellow-400">MTN Mobile Money</span>
              <p className="text-lg font-mono font-bold text-white">025 711 2267</p>
              <p className="text-[10px] text-slate-400">David Amoah / Min David Inkoom</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-1">
              <span className="text-xs font-bold text-red-400">Telecel Cash</span>
              <p className="text-lg font-mono font-bold text-white">050 009 8877</p>
              <p className="text-[10px] text-slate-400">David Nana Kweku Amoah</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-1">
              <span className="text-xs font-bold text-blue-400">Fidelity Bank Ghana</span>
              <p className="text-lg font-mono font-bold text-white">2030763999318</p>
              <p className="text-[10px] text-slate-400">David Nana Kweku Amoah</p>
            </div>
          </div>
        </div>
      )}

      {/* 6. MEMBERS VIEW */}
      {currentTab === 'members' && (
        <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-serif text-lg font-bold text-white">Covenant Partners & Newsletter</h3>
            <p className="text-xs text-slate-400">1,240 registered partners across Ghana, UK, US, and Nigeria</p>
          </div>
          <p className="text-xs text-slate-300">
            Monthly devotional digests and itinerary broadcasts are synchronized automatically with WhatsApp and email routing.
          </p>
        </div>
      )}

      {/* 7. SETTINGS VIEW */}
      {currentTab === 'settings' && (
        <div className="bg-black/80 p-6 rounded-2xl border border-[#FFC700]/30 shadow-xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-serif text-lg font-bold text-white">Portal Security & Configurations</h3>
            <p className="text-xs text-slate-400">Administrative keys and ministry contacts</p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-2">
              <span className="font-bold text-[#FFC700] uppercase block">Security Credentials</span>
              <p className="text-slate-300">Admin Email: <strong className="text-white">admin@davidinkoom.org</strong></p>
              <p className="text-slate-300">Password: <strong className="text-white">Encrypted with Bcrypt (Salt rounds: 10)</strong></p>
              <p className="text-slate-300">Session Mode: <strong className="text-emerald-400">JWT (8h expiration with CSRF Guard)</strong></p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-2">
              <span className="font-bold text-[#FFC700] uppercase block">Official Contact Dispatch</span>
              <p className="text-slate-300">WhatsApp Alert Destination: <strong className="text-white">+233 25 711 2267</strong></p>
              <p className="text-slate-300">Official Email: <strong className="text-white">Davidinkoomministry@gmail.com</strong></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
