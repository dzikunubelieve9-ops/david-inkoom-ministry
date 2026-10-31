export interface PrayerRequest {
  id: string;
  name: string;
  country?: string;
  message: string;
  isPrayer: boolean;
  createdAt: string;
}

export interface ReplaySession {
  id: string;
  title: string;
  category: 'Prophetic Revival' | 'DIWC Sanctuary' | 'Acoustic Worship' | 'Special Night';
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  description: string;
}

export interface TicketRegistration {
  id: string;
  attendeeName: string;
  email: string;
  phone: string;
  tier: 'General Admission' | 'VIP Kingdom Partner' | 'Golden Ministry Sponsor';
  amount: number;
  quantity: number;
  referenceId: string;
  qrToken: string;
  createdAt: string;
}

export interface BookingInquiry {
  id?: string;
  name: string; // Name / Ministry
  church: string; // Inviting Church
  eventType: string; // Event Type
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  location: string; // Venue with Google Maps routing
  purpose: string; // Theme / Purpose of event
  honorarium?: string; // Optional honorarium blessing amount or notes
  livestreamUrl?: string; // Optional Facebook / YouTube links
  additionalDetails?: string; // Open extra details
  status?: 'Pending' | 'Approved' | 'Conflict';
  createdAt?: string;
}

export interface MinistryProduct {
  id: string;
  title: string;
  priceGHS: number;
  imageUrl: string;
  category: 'Apparel' | 'Audio / Music' | 'Books';
  description: string;
}
