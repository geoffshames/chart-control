import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

export const metadata: Metadata = {
  title: 'CHART CONTROL - Billboard Hot 100 Reverse Engineer',
  description: 'Interactive calculator for reverse-engineering the Billboard Hot 100 points system',
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
