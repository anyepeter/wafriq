import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { getTranslations } from 'next-intl/server';
import BillingToggle from './BillingToggle';


type PlanKey = 'standard' | 'pro' | 'expert';

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
  | 'priority_support'
  | 'essential_features';

type Plan = {
  key: PlanKey;
  image: string;
  popular: boolean;
  features: FeatureKey[];
  isAddon?: boolean;
};

const plans: readonly Plan[] = [
  {
    key: 'standard',
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
    key: 'pro',
    image: '/images/illustration03.svg',
    popular: true,
    features: [
      'essential_features',
      'resources',
      'stock_alerts',
      'multi_checkout'
    ],
    isAddon: true
  },
  {
    key: 'expert',
    image: '/images/illustration.svg',
    popular: false,
    features: [
      'essential_features',
      'barcode_support',
      'barcode_scanner',
      'marketing_auto',
      'api_access',
      'priority_support'
    ],
    isAddon: true
  },
];

export default async function PricingToggle() {
  const t = await getTranslations('pricing');
  const w = await getTranslations('whatsappMessages');
  return (
    <BillingToggle>
      <div className="flex justify-center">
        <div className="grid w-full h-full max-w-[400px] sm:max-w-[850px] lg:max-w-full sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative flex flex-col h-full bg-white rounded-2xl border ${plan.popular
                ? 'border-primary-500 shadow-xl scale-[1.02]'
                : 'border-gray-200'
                } transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="p-4">
                <div className="bg-blue-50 p-6 text-center rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {t(`plans.${plan.key}.name`)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {t(`plans.${plan.key}.description`)}
                  </p>
                  <div className="relative h-40 mb-6">
                    <Image
                      src={plan.image}
                      alt={t(`plans.${plan.key}.name`)}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      <span className="monthly-content">{t(`plans.${plan.key}.priceMonthly`)}</span>
                      <span className="annual-content">{t(`plans.${plan.key}.priceAnnual`)}</span>
                    </span>
                    <span className="text-gray-500 text-sm">
                      <span className="monthly-content">{t('perMonth')}</span>
                      <span className="annual-content">{t('perYear')}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CircleCheck className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600">
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
                    className="flex items-center text-sm md:text-base justify-center gap-2 w-full px-1 md:px-2 lg:px-4 py-3 border-2 border-primary-500 text-primary-500 rounded-xl font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-md"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('cta')}
                  </Link>
                </div>
                <div className="annual-content mt-auto">
                  <Link
                    href={getWhatsAppUrl(w(`plans.${plan.key}.annual`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm md:text-base justify-center gap-2 w-full px-1 md:px-2 lg:px-4 py-3 border-2 border-primary-500 text-primary-500 rounded-xl font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-md"
                  >
                    <MessageCircle className="w-5 h-5" />
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
