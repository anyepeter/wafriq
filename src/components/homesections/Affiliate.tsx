import { getWhatsAppUrl } from '@/lib/whatsapp';
import {
  ChartNoAxesCombined,
  CircleDollarSign,
  ClipboardList,
  LucideIcon,
  MessageCircle,
  Share2,
  Star,
  Trophy,
} from 'lucide-react';
import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface InfoItem {
  icon: LucideIcon;
  text: string;
}
interface InfoListProps {
  title: string;
  items: InfoItem[];
}


export default function Affiliate(): JSX.Element {
  const t = useTranslations('affiliate');
  const w = useTranslations('whatsappMessages');
  const howItWorksItems: InfoItem[] = [
    { icon: ClipboardList, text: t('howItWorks.step1') },
    { icon: Share2, text: t('howItWorks.step2') },
    { icon: CircleDollarSign, text: t('howItWorks.step3') },
  ];
  const benefitsItems: InfoItem[] = [
    { icon: Star, text: t('benefits.commission') },
    { icon: Trophy, text: t('benefits.bonus') },
    { icon: ChartNoAxesCombined, text: t('benefits.tracking') },
  ];
  return (
    <section id="partner" className="pb-16 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 p-4 sm:p-8 lg:p-16 rounded-2xl bg-white">
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
              src="/images/image.webp"
              alt="Affiliate Program"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-full relative flex justify-center -mt-15 md:-mt-30 z-10">
            <div className="grid w-full bg-white max-w-[1000px] rounded-2xl p-4 md:grid-cols-2">
              <div className="p-2 pb-6 md:p-6 border-b border-gray-200 md:border-r md:border-b-0 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('ctaTitle')}
                </h3>
                <Link
                  href={getWhatsAppUrl(w('affiliate'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('whatsappMe')}
                </Link>
              </div>
              <div className="p-2 pt-6 pb-6 md:p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('becomeAffiliate')}
                </h3>
                <p className="text-blue-500 bg-gray-50 rounded-xl p-4 font-medium">
                  {t('affiliateSubtitle')}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-2xl mt-6 p-4 sm:p-6 lg:p-10">
            <InfoList title={t('howItWorks.title')} items={howItWorksItems} />
            <InfoList title={t('benefits.title')} items={benefitsItems} />
          </div>
        </div>
      </div>
    </section>
  );
}


const InfoList = ({ title, items }: InfoListProps): JSX.Element => (
  <div>
    <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-4 bg-white border border-gray-200 rounded-2xl p-2 md:p-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
            <item.icon className="w-6 h-6" />
          </div>
          <span className="text-gray-900 text-sm lg:text-base">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);