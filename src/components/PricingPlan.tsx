import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { getTranslations } from 'next-intl/server';
import BillingToggle from './BillingToggle';


type PlanKey = 'essential' | 'inventory' | 'production' | 'complete';

type FeatureKey =
  | 'billing'
  | 'payments'
  | 'expenses'
  | 'reports'
  | 'budget'
  | 'stats'
  | 'profitability'
  | 'forecasts'
  | 'resources'
  | 'stock_alerts'
  | 'multi_checkout'
  | 'barcode_support'
  | 'barcode_scanner'
  | 'marketing_auto'
  | 'api_access'
  | 'priority_support';

type Plan = {
  key: PlanKey;
  image: string;
  popular: boolean;
  features: FeatureKey[];
};

const plans: readonly Plan[] = [
  {
    key: 'essential',
    image: '/images/illustration-1.svg',
    popular: false,
    features: [
      'billing',
      'payments',
      'expenses',
      'reports',
      'budget',
      'stats',
      'profitability',
      'forecasts'
    ]
  },
  {
    key: 'inventory',
    image: '/images/illustration03.svg',
    popular: false,
    features: [
      'billing',
      'payments',
      'expenses',
      'reports',
      'budget',
      'stats',
      'profitability',
      'forecasts',
      'resources',
      'stock_alerts',
      'multi_checkout'
    ]
  },
  {
    key: 'production',
    image: '/images/illustration.svg',
    popular: false,
    features: [
      'billing',
      'payments',
      'expenses',
      'reports',
      'budget',
      'stats',
      'profitability',
      'forecasts',
      'barcode_support',
      'barcode_scanner',
      'marketing_auto',
      'api_access',
      'priority_support'
    ]
  },
  {
    key: 'complete',
    image: '/images/illustration5.svg',
    popular: true,
    features: [
      'billing',
      'payments',
      'expenses',
      'reports',
      'budget',
      'stats',
      'profitability',
      'forecasts',
      'resources',
      'stock_alerts',
      'multi_checkout',
      'barcode_support',
      'barcode_scanner',
      'marketing_auto',
      'api_access',
      'priority_support'
    ]
  },
];

export default async function PricingToggle() {
  const t = await getTranslations('pricing');
  const w = await getTranslations('whatsappMessages');
  return (
    <BillingToggle>
      <div className="flex justify-center">
        <div className="grid w-full max-w-[400px] sm:max-w-[850px] lg:max-w-full sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative flex flex-col h-full bg-white rounded-2xl border ${plan.popular
                ? 'border-primary-500 shadow-xl ring-2 ring-primary-500/20'
                : 'border-gray-200'
                } transition-all duration-300 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {t('popularBadge')}
                  </span>
                </div>
              )}
              <div className="p-3">
                <div className={`${plan.popular ? 'bg-primary-50' : 'bg-blue-50'} p-5 text-center rounded-xl`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {t(`plans.${plan.key}.name`)}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 min-h-[2.5rem]">
                    {t(`plans.${plan.key}.description`)}
                  </p>
                  <div className="relative h-32 mb-4">
                    <Image
                      src={plan.image}
                      alt={t(`plans.${plan.key}.name`)}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      <span className="monthly-content">{t(`plans.${plan.key}.priceMonthly`)}</span>
                      <span className="annual-content">{t(`plans.${plan.key}.priceAnnual`)}</span>
                    </span>
                    <span className="text-gray-500 text-xs">
                      {t('currency')}
                      <span className="monthly-content">{t('perMonth')}</span>
                      <span className="annual-content">{t('perYear')}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5 flex flex-col flex-1">
                <ul className="space-y-2.5 mb-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CircleCheck className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-gray-600">
                        {t(`features.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="monthly-content mt-auto">
                  <Link
                    href={getWhatsAppUrl(w(`plans.${plan.key}.monthly`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm justify-center gap-2 w-full px-2 py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-md'
                      : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md'
                      }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('cta')}
                  </Link>
                </div>
                <div className="annual-content mt-auto">
                  <Link
                    href={getWhatsAppUrl(w(`plans.${plan.key}.annual`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm justify-center gap-2 w-full px-2 py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-md'
                      : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-md'
                      }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('cta')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BillingToggle>
  );
}
