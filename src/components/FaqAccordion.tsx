'use client';

import { Plus, Minus } from 'lucide-react';
import { useState, JSX } from 'react';
import { useTranslations } from 'next-intl';


export default function FaqAccordion(): JSX.Element {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number>(0);
  const questions = ['internet', 'devices', 'hardware', 'restaurants', 'affiliate'];
  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {questions.map((key, index) => (
        <div key={key} className='flex gap-4'>
          <div
            className={`border rounded-xl w-full overflow-hidden transition-all ${openIndex === index
              ? 'border-primary-400'
              : 'border-gray-200 bg-white'
              }`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-center justify-between p-5 text-left"
              aria-expanded={openIndex === index}
            >
              <span
                className={`font-medium pr-4 ${openIndex === index ? 'text-primary-500 w-full pb-4 border-b-1 border-primary-200' : 'text-gray-900'
                  }`}
              >
                {t(`questions.${key}.question`)}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
            >
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                {t(`questions.${key}.answer`)}
              </div>
            </div>
          </div>
          <button onClick={() => toggleQuestion(index)}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-primary-100 text-primary-500`}
          >
            {openIndex === index ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
