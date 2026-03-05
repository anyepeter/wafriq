'use client';

import { useState, type JSX, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';


type BillingToggleProps = {
  children: ReactNode;
};


export default function BillingToggle({ children }: BillingToggleProps): JSX.Element {
  const t = useTranslations('pricing');
  const [isAnnual, setIsAnnual] = useState<boolean>(false);
  return (
    <div data-annual={isAnnual}>
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center border border-gray-200 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${!isAnnual
              ? 'bg-gray-900 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {t('monthly')}
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${isAnnual
              ? 'bg-gray-900 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {t('annual')}
            <span className="absolute -top-4 -right-5 border border-gray-200 bg-white text-gray-900 text-xs px-2 py-0.5 rounded-full">
              {t('discount')}
            </span>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
