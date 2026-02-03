import Image from 'next/image';
import { LocateFixed, Mail, Phone, User, UserCog } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Button } from './ui/button';


type IconInputProps = {
    id: string;
    name: string;
    type?: string;
    placeholder: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}


export default async function ContactForm() {
    const t = await getTranslations('contactPage');

    async function submitContactForm(formData: FormData) {
        'use server';
        const rawFormData = {
            fullName: formData.get('fullName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            city: formData.get('city'),
            profession: formData.get('profession'),
        };
    }
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
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-gray-600 text-center mb-8 text-sm">
                            {t('description')}
                        </p>
                        <form action={submitContactForm} className="space-y-4">
                            <IconInput
                                id="fullName"
                                name="fullName"
                                label={t('form.fullName')}
                                placeholder={t('form.fullNamePlaceholder')}
                                icon={User}
                            />

                            <IconInput
                                id="phone"
                                name="phone"
                                type="tel"
                                label={t('form.phone')}
                                placeholder={t('form.phonePlaceholder')}
                                icon={Phone}
                            />

                            <IconInput
                                id="email"
                                name="email"
                                type="email"
                                label={t('form.email')}
                                placeholder={t('form.emailPlaceholder')}
                                icon={Mail}
                            />

                            <IconInput
                                id="city"
                                name="city"
                                label={t('form.city')}
                                placeholder={t('form.cityPlaceholder')}
                                icon={LocateFixed}
                            />

                            <IconInput
                                id="profession"
                                name="profession"
                                label={t('form.profession')}
                                placeholder={t('form.professionPlaceholder')}
                                icon={UserCog}
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className='w-full text-white font-semibold'
                            >
                                {t('form.submit')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


const IconInput = (
    {
        id,
        name,
        label,
        placeholder,
        type = "text",
        icon: Icon
    }: IconInputProps) => (
    <div className="relative">
        <label htmlFor={id} className="sr-only">
            {label}
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
    </div>
);