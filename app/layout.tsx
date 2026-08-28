import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Nuestra historia — Tú & yo',
  description: 'Una cronología de nuestro amor, nuestros recuerdos y todo lo que hemos superado juntos.',
  openGraph: {
    title: 'Tú & yo, siempre.',
    description: 'Nuestra historia, nuestros recuerdos y todo lo que hemos superado juntos.',
    images: [{ url: '/og.png', width: 1536, height: 804, alt: 'Tú y yo, siempre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tú & yo, siempre.',
    description: 'Nuestra historia, nuestros recuerdos.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geist.variable} antialiased`}>{children}</body></html>;
}
