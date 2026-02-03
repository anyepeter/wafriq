import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';
import { useTranslations } from 'next-intl';


export default function MembersHero() {
    const t = useTranslations('membersPage');
    return (
        <section className="relative mb-10">
            <div className="absolute inset-0 bg-white" />
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        {t('hero.titleStart')}{' '}
                        <span className="text-primary-600">{t('hero.highlight')}</span>{' '}
                        {t('hero.titleEnd')}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-lg max-w-3xl mx-auto mb-10">
                        {t('hero.description')}
                    </p>
                    <Button
                        className="text-white font-semibold"
                        size="lg"
                    >
                        {t('hero.cta')}
                        <MoveRight className="mt-1 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
