import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import { getWhatsAppUrl } from '@/lib/whatsapp';


export default async function Faq() {
  const t = await getTranslations('faq');
  const w = await getTranslations('whatsappMessages');
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className='w-full max-w-[600px] md:max-w-full mx-auto p-4'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
            <div className="relative hidden md:block h-full w-full order-2 md:order-1">
              <div className="relative aspect-[3/4]">
                <div className="absolute inset-0 rounded-2xl" />
                <div className="relative h-full w-auto">
                  <Image
                    src="/images/faq1.webp"
                    alt="Wafriq Support"
                    width={400}
                    height={400}
                    className="object-contain w-auto h-full"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  {t('title')}
                </h2>
                <p className="text-gray-600 text-sm ">
                  {t('subtitle')}{' '}
                  <Link
                    href={getWhatsAppUrl(w('general'))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    WhatsApp
                  </Link>
                </p>
              </div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
