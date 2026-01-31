import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';


type ProductKey = 'printer' | 'stand' | 'tablet';

type Product = {
  key: ProductKey;
  image: string;
};


export default function Shop() {
  const t = useTranslations('shop');
  const products: readonly Product[] = [
    {
      key: 'printer',
      image: '/images/image-3.png',
    },
    {
      key: 'stand',
      image: '/images/image-2.png',
    },
    {
      key: 'tablet',
      image: '/images/image-1.png',
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
              {t('title')}
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[400px] sm:max-w-[850px] lg:max-w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {products.map((product) => (
                <article
                  key={product.key}
                  className="bg-white rounded-lg overflow-hidden p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`products.${product.key}.name`)}
                  </h3>
                  <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={t(`products.${product.key}.name`)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="text-base text-gray-600 font-semibold mb-2">
                    {t('startingFrom')}{' '}
                    <span className="text-primary-500 font-semibold">
                      {t(`products.${product.key}.price`)}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {t(`products.${product.key}.description`)}
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    {t('cta')}
                  </Button>
                </article>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <a href="#products">
                {t('viewMore')}
                <MoveRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
