import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { useTranslations } from 'next-intl';

type ProductKey = 'printer' | 'stand' | 'tablet' | 'barcodeReader' | 'cashDrawer' | 'contactlessPayment' | 'software1' | 'software2' | 'software3';

type Product = {
    key: ProductKey;
    image: string;
};

export default function ShopPage() {
    const t = useTranslations('shopPage');
    const products: readonly Product[] = [
        { key: 'printer', image: '/images/image-3.png' },
        { key: 'stand', image: '/images/image-2.png' },
        { key: 'tablet', image: '/images/image-1.png' },
        { key: 'barcodeReader', image: '/images/image-3.png' },
        { key: 'cashDrawer', image: '/images/image-2.png' },
        { key: 'contactlessPayment', image: '/images/image-1.png' },
        { key: 'software1', image: '/images/image-3.png' },
        { key: 'software2', image: '/images/image-2.png' },
        { key: 'software3', image: '/images/image-1.png' },
    ];
    return (
        <main>
            <Navbar />
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
                            {t('title')}{' '}
                            <span className="text-primary-500">{t('titleHighlight')}</span>
                            {' '}{t('titleEnd')}
                        </h1>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            {t('description')}
                        </p>
                    </div>
                    <div className="grid w-full mx-auto max-w-[400px] sm:max-w-[850px] lg:max-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.key}
                                image={product.image}
                                name={t(`products.${product.key}.name`)}
                                description={t(`products.${product.key}.description`)}
                                price={t(`products.${product.key}.price`)}
                                startingFromText={t('startingFrom')}
                                ctaText={t('cta')}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
