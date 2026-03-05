import { getTranslations } from 'next-intl/server';
import PricingToggle from '@/components/PricingPlan';
import Image from 'next/image';

export default async function Pricing() {
  const t = await getTranslations('pricing');
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4">
            <Image
              src='/images/badge.png'
              alt='Badge'
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-primary-500">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('title')}{' '}
            <span className="text-primary-500">7,000&nbsp;FCFA.</span>
          </h2>
        </div>
        <PricingToggle />
      </div>
    </section>
  );
}
