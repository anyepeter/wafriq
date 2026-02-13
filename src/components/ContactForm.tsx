import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Button } from './ui/button';
import { Link } from '@/i18n/navigation';
import { getWhatsAppUrl } from '@/lib/whatsapp';


export default async function ContactForm() {
    const t = await getTranslations('contactPage');
    const w = await getTranslations('whatsappMessages');

    return (
        <section className="min-h-[80vh] flex items-center justify-center my-10 lg:my-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 sm:px-6 lg:px-0">
                    <div className="relative h-full w-auto flex items-center justify-center order-1">
                        <Image
                            src="/images/faq.png"
                            alt="Wafriq Partner"
                            width={400}
                            height={500}
                            className="object-contain w-auto h-full"
                        />
                    </div>
                    <div className="bg-white max-w-[650px] mx-auto lg:py-12 lg:pl-12 flex flex-col justify-center lg:order-2 lg:order-1">
                        <div className="flex justify-center mb-8">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/ww.png"
                                    alt="Wafriq Partner"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-gray-600 text-center mb-8 text-lg">
                            {t('description')}
                        </p>

                        <div className="flex justify-center">
                            <Button
                                asChild
                                size="lg"
                                className={`
                                    w-full sm:w-auto bg-primary-500 hover:bg-transparent hover:text-primary-500 
                                    hover:border-primary-500 border text-white font-bold py-6 px-10 rounded-lg
                                    transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3
                                    text-lg`
                                }
                            >
                                <Link
                                    href={getWhatsAppUrl(w('general'))}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    {t('whatsappCta')}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}