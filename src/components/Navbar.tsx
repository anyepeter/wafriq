import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';

export default function Navbar() {
  const t = useTranslations('nav');

  const navLinks = [
    { href: '#features', label: t('features') },
    { href: '#pricing', label: t('pricing') },
    { href: '#shop', label: t('shop') },
    { href: '#partner', label: t('partner') },
    { href: '#demo', label: t('demo') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/Logo.png"
              alt="Wafriq"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="#order"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium border rounded-lg hover:bg-blue-600 transition-colors"
            >
              {t('cta')}
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <MobileMenu navLinks={navLinks} ctaText={t('cta')} />
          </div>
        </div>
      </div>
    </header>
  );
}
