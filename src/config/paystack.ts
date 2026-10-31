// Direct Ghana Mobile Money & Bank Transfer Configuration (Paystack Removed)
export const GIVING_CONFIG = {
  directChannels: {
    mtnMoMo: {
      provider: "MTN Mobile Money",
      number: "0257112267",
      formatted: "025 711 2267",
      accountName: "David Amoah / Min David Inkoom"
    },
    telecelCash: {
      provider: "Telecel Cash",
      number: "0500098877",
      formatted: "050 009 8877",
      accountName: "David Nana Kweku Amoah"
    },
    bankTransfer: {
      bankName: "Fidelity Bank Ghana",
      accountNumber: "2030763999318",
      accountName: "David Nana Kweku Amoah"
    }
  },
  whatsappBookingNumber: "+233257112267",
  whatsappFormatted: "+233 25 711 2267",
  officialEmail: "Davidinkoomministry@gmail.com"
};

export interface GivingSeedOption {
  amount: number;
  label: string;
  isPopular?: boolean;
}

export const SEED_PRESETS: GivingSeedOption[] = [
  { amount: 50, label: "50 GHS" },
  { amount: 100, label: "100 GHS", isPopular: true },
  { amount: 200, label: "200 GHS" },
  { amount: 500, label: "500 GHS" }
];
