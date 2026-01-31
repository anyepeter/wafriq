import { useTranslations } from 'next-intl';
import Image from 'next/image';


type FeatureCardProps = {
  description: string;
  image: string;
  reverse?: boolean;
  title: string;
};


export default function Features() {
  const t = useTranslations('features');
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4">
            <Image
              src='/images/badge.png'
              alt='Badge'
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-primary-500">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mx-auto">
            {t('title')}
          </h2>
        </div>
        <div className='w-full h-full flex justify-center items-center lg:hidden'>
          <div className="grid grid-cols-1 gap-6 auto-rows-fr items-stretch w-full h-full max-w-[600px] sm:max-w-[900px] mx-auto sm:grid-cols-2 p-4
          ">
            <FeatureCard
              title={t(`billing.title`)}
              description={t(`billing.description`)}
              image="images/illustration1.svg"
            />
            <FeatureCard
              title={t(`sales.title`)}
              description={t(`sales.description`)}
              image="images/illustration2.svg"
              reverse={true}
            />
            <FeatureCard
              title={t(`stock.title`)}
              description={t(`stock.description`)}
              image="images/illustration3.svg"
            />
            <div className="relative w-full h-full min-h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/images/illustration4.png"
                alt="Feature Illustration"
                className="object-cover"
                fill
              />
            </div>
            <FeatureCard
              title={t(`staff.title`)}
              description={t(`staff.description`)}
              image="images/illustration5.svg"
            />
            <FeatureCard
              title={t(`whatsapp.title`)}
              description={t(`whatsapp.description`)}
              image='/images/illustration6.png'
              reverse={true}
            />
          </div>
        </div>
        <div className='lg:flex hidden gap-3 mb-3'>
          <FeatureCard
            title={t(`billing.title`)}
            description={t(`billing.description`)}
            image="images/illustration1.svg"
          />
          <FeatureCard
            title={t(`sales.title`)}
            description={t(`sales.description`)}
            image="images/illustration2.svg"
            reverse={true}
          />
          <FeatureCard
            title={t(`stock.title`)}
            description={t(`stock.description`)}
            image="images/illustration3.svg"
          />
        </div>
        <div className='lg:flex hidden gap-3' >
          <div className="h-auto">
            <Image
              src="/images/illustration4.png"
              alt="Feature Illustration"
              className="w-full h-auto object-cover"
              width={280}
              height={280}
            />
          </div>
          <FeatureCard
            title={t(`staff.title`)}
            description={t(`staff.description`)}
            image="images/illustration5.svg"
          />
          <FeatureCard
            title={t(`whatsapp.title`)}
            description={t(`whatsapp.description`)}
            image='/images/illustration6.png'
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}


function FeatureCard({
  title,
  description,
  image,
  reverse = false,
}: FeatureCardProps) {
  return (
    <article

      className={`bg-[#E8F1FF] p-6 flex-1 overflow-hidden rounded-xl flex gap-2 justify-between items-center
      ${reverse
          ? 'flex-col-reverse'
          : 'flex-col'}
      ${image === "images/illustration5.svg"
          ? 'w-full lg:max-w-[435px]'
          : ''}
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className={`w-full h-auto object-cover rounded-x 
            ${image === "images/illustration3.svg"
              ? '-mt-18'
              : ''}
            ${image === "/images/illustration6.png"
              ? '-mb-9'
              : ''}`}
        />
      </div>
      <div className='flex flex-col w-full h-full justify-center gap-3'>
        <h3 className="text-2xl font-bold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}