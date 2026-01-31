'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  ctaText: string;
}

export default function MobileMenu({ navLinks, ctaText }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('mobileMenu');
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label={isOpen ? t('closeMenu') : t('openMenu')}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={t('closeMenu')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-600 border-b border-gray-200 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="p-4">
            <a
              href="#order"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-lg border transition-colors font-medium"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
