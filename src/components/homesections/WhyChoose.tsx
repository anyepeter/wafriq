import { useTranslations } from 'next-intl';
import Image from 'next/image';


type ReasonKey = 'local' | 'easy' | 'whatsapp' | 'tools' | 'support';


export default function WhyChoose() {
  const t = useTranslations('whyChoose');

  const reasons: ReadonlyArray<{ key: ReasonKey }> = [
    { key: 'local' },
    { key: 'easy' },
    { key: 'whatsapp' },
    { key: 'tools' },
    { key: 'support' },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-blue-500 overflow-hidden">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: 'url(/images/groupbg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-28">
        <div className="text-center mb-4 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2">
            <Image
              src='/images/badge-2.png'
              alt='Badge'
              width={20}
              height={20}
            />
            <span className="text-white">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            {t('title')}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 px-4 lg:gap-12">
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute left-[50%] top-8 bottom-8 w-1 bg-white" />
            <div className="flex flex-col gap-3 justify-between w-full max-w-[700px] h-full">
              {reasons.map((reason, index) => (
                <div
                  key={reason.key}
                  className="relative flex items-start gap-4 sm:gap-4 bg-white rounded-3xl p-3 border border-white/20"
                >
                  <div className="relative z-10 flex-shrink-0 p-5 bg-white border-2 border-[#1B77FF] rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-primary-500">
                      {t(`reasons.${reason.key}.number`)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 py-2">
                    <h3 className="font-bold mb-1 text-base">
                      {t(`reasons.${reason.key}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {t(`reasons.${reason.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full w-full max-w-[700px] mx-auto flex items-center justify-center lg:block">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/composition.webp"
                alt="Wafriq users"
                fill
                className="object-center lg:px-0 lg:py-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
