import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

const siteUrl = 'https://chart.crowdcontroldigital.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'CHART CONTROL — Hot 100 Reverse Engineer',
  description:
    'Interactive calculator that reverse-engineers the Billboard Hot 100 points formula — calibrated weekly against live Luminate data.',
  openGraph: {
    title: 'CHART CONTROL — Hot 100 Reverse Engineer',
    description:
      'The Billboard Hot 100, reverse-engineered. Input a song\u2019s consumption profile and see the predicted chart position — calibrated weekly against Luminate.',
    url: siteUrl,
    siteName: 'Crowd Control Digital',
    images: [
      {
        url: '/chartcontrol-og.png',
        width: 1200,
        height: 630,
        alt: 'CHART CONTROL — The Hot 100, Reverse-Engineered',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHART CONTROL — Hot 100 Reverse Engineer',
    description:
      'The Billboard Hot 100, reverse-engineered. Calibrated weekly against Luminate.',
    images: ['/chartcontrol-og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.variable}>{children}</body>
    </html>
  );
}
