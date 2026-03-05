import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Manrope, DM_Sans } from 'next/font/google';
import '../globals.css';


const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wafriq - La solution tout-en-un pour votre commerce',
  description:
    'Révolutionnez votre quotidien avec un système de caisse innovant, conçu pour les commerces africains. Encaissez, gérez vos stocks et boostez vos ventes directement sur WhatsApp.',
  keywords: [
    'POS',
    'caisse',
    'commerce',
    'Afrique',
    'WhatsApp',
    'gestion de stock',
    'facturation',
  ],
  openGraph: {
    title: 'Wafriq - La solution tout-en-un pour votre commerce',
    description:
      'Révolutionnez votre quotidien avec un système de caisse innovant, conçu pour les commerces africains.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wafriq - La solution tout-en-un pour votre commerce',
    description:
      'Révolutionnez votre quotidien avec un système de caisse innovant, conçu pour les commerces africains.',
  },
  icons: {
    icon: '/images/Logo.png',
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${manrope.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
