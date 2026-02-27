import Demo from './Demo';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { getTranslations } from 'next-intl/server';


type Customer = {
  name: string;
  city: string;
};

export default async function Hero() {
  const t = await getTranslations('hero');
  const w = await getTranslations('whatsappMessages');
  const customers: ReadonlyArray<Customer> = [
    { name: 'Terrific Coffee', city: 'Douala' },
    { name: 'Egal Sans Regal', city: 'Yaoundé' },
    { name: 'Restaurant Mykonos Paradise', city: 'Kribi' },
    { name: 'Yoan Coffee House', city: 'Yaoundé' },
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 pt-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-[2.4rem] [@media(min-width:1100px)]:text-[2.8rem]  [@media(min-width:1200px)]:text-[3.1rem] [@media(min-width:1370px)]:text-6xl font-bold leading-tight text-gray-900">
              {t('headline')}{' '}
              <span className="text-blue-500">{t('headlineHighlight')}</span>{' '}
              {t('headlineContinue')}{' '}
              <span className="text-green-500">{t('whatsapp')}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              {t('description')}
            </p>
            <div className="mt-8 lg:mt-6 xl:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="px-6 lg:px-3 xl:px-6 bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <a href={getWhatsAppUrl(w('general'))} target="_blank" rel="noopener noreferrer">{t('ctaPrimary')}</a>
              </Button>
              <Demo ctaSecondaryText={t('ctaSecondary')} />
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative z-10">
                <Image
                  src="/images/hero-image.png"
                  alt="Wafriq POS System"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-14 lg:-mt-26 bg-black py-12 pt-18 lg:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-8 text-center lg:text-left italic">
            {t('trustTitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-10">
            {customers.map((customer) => (
              <div
                key={customer.name}
                className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <span className="text-white font-semibold text-sm md:text-base lg:text-lg">
                  {customer.name}
                </span>
                <span className="text-gray-400 text-xs md:text-sm">
                  {customer.city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
