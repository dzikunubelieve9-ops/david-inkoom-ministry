import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MIN DAVID INKOOM MINISTRY | Official Global Portal',
  description: 'Raising A Generation of True Worshippers. Experience prophetic worship, invite Minister David for programs, and access the secure administrative altar.',
  icons: {
    icon: '/assets/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050F23] text-slate-100 font-sans antialiased selection:bg-[#7A0000] selection:text-[#FFC700]">
        {children}
      </body>
    </html>
  );
}
