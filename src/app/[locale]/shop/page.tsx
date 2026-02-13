import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { useTranslations } from 'next-intl';
import { getWhatsAppUrl } from '@/lib/whatsapp';

type ProductKey = 'tablet' | 'printer' | 'stand' | 'barcodeReader';

type Product = {
    key: ProductKey;
    image: string;
};

export default function ShopPage() {
    const t = useTranslations('shop');
    const w = useTranslations('whatsappMessages');
    const products: readonly Product[] = [
        { key: 'tablet', image: '/images/image-1.png' },
        { key: 'printer', image: '/images/image-3.png' },
        { key: 'stand', image: '/images/image-2.png' },
        { key: 'barcodeReader', image: '/images/image-3.png' },
    ];
    return (
        <main>
            <Navbar />
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
                            {t('pageTitle')}{' '}
                            <span className="text-primary-500">{t('pageTitleHighlight')}</span>
                            {' '}{t('pageTitleEnd')}
                        </h1>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            {t('description')}
                        </p>
                    </div>
                    <div className="grid w-full mx-auto max-w-[400px] sm:max-w-[850px] lg:max-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
            </section>
            <Footer />
        </main>
    );
}
