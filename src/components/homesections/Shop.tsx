import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import ProductCard from '@/components/ProductCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';


type ProductKey = 'tablet' | 'printer' | 'stand';

type Product = {
  key: ProductKey;
  image: string;
};


export default function Shop() {
  const t = useTranslations('shop');
  const w = useTranslations('whatsappMessages');
  const products: readonly Product[] = [
    {
      key: 'tablet',
      image: '/images/image-1.png',
    },
    {
      key: 'printer',
      image: '/images/image-3.png',
    },
    {
      key: 'stand',
      image: '/images/image-2.png',
    },
  ];
  return (
    <section id="shop">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="p-2 bg-white">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4">
              <Image
                src="/images/badge.png"
                alt="Badge"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium text-primary-500">
                {t('badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('landingTitle')}
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[400px] sm:max-w-[850px] lg:max-w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {products.map((product) => (
                <ProductCard
                  key={product.key}
                  image={product.image}
                  name={t(`products.${product.key}.name`)}
                  description={t(`products.${product.key}.description`)}
                  price={t(`products.${product.key}.price`)}
                  startingFromText={t('startingFrom')}
                  ctaText={t('cta')}
                  whatsappUrl={getWhatsAppUrl(w(`products.${product.key}`))}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <Link href="/shop">
                {t('viewMore')}
                <MoveRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
