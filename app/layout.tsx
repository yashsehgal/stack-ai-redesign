import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/sections';
import FooterSection from '@/components/sections/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stack AI · No-Code Platform for Enterprise AI',
  description:
    'Stack AI is the fastest way to build AI applications, automations, workflows. Skyrocket productivity by integrating LLMs with your data sources. Build co-pilots, assistants, chatbots, forms, and APIs, without code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
