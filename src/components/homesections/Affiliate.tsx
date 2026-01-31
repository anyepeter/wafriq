import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
   Star,
   ClipboardList, 
   Share2, 
   Trophy,
   ChartNoAxesCombined,
   CircleDollarSign,
   } from 'lucide-react';

export default function Affiliate() {
  const t = useTranslations('affiliate');

  return (
    <section id="partner" className="pb-16 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-16 bg-white">
          <div className="mb-8 mt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 max-w-3xl">
              {t('title')}
            </h2>
            <p className="text-gray-600 max-w-6xl">
              {t('description')}
            </p>
          </div>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 bg-blue-100">
            <Image
              src="/images/image.png"
              alt="Affiliate Program"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <div className="w-full relative flex justify-center -mt-15 md:-mt-30 z-10">
          <div className="grid w-full bg-white max-w-[1000px] rounded-2xl p-4 md:grid-cols-2">
            <div className="p-6 border-b border-gray-200 md:border-r md:border-b-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('ctaTitle')}
              </h3>
              <form className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white justify-center rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  {t('submit')}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('becomeAffiliate')}
              </h3>
              <p className="text-blue-500 bg-gray-50 rounded-xl p-4 font-medium">
                {t('affiliateSubtitle')}
              </p>
            </div>
          </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl mt-6 p-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('howItWorks.title')}
              </h3>
              <ul className="space-y-4 bg-white border border-gray-200 rounded-2xl p-6">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <span className="text-gray-900">{t('howItWorks.step1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <span className="text-gray-900">{t('howItWorks.step2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CircleDollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-gray-900">{t('howItWorks.step3')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('benefits.title')}
              </h3>
              <ul className="space-y-4 bg-white border border-gray-200 rounded-2xl p-6">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6" />
                  </div>
                  <span className="text-gray-900">{t('benefits.commission')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="text-gray-900">{t('benefits.bonus')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <ChartNoAxesCombined className="w-6 h-6" />
                  </div>
                  <span className="text-gray-900">{t('benefits.tracking')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
