'use client';

import { ArrowUp } from "lucide-react";

interface GoToTopButtonProps {
  label: string;
}

export default function GoToTopButton({ label }: GoToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 pr-4 pl-2 py-2 text-sm text-gray-400 hover:text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <p className="text-white rounded-lg p-2 bg-gray-700">
      <ArrowUp className="w-4 h-4 text-white" />
      </p>
      
      <p className="text-white">{label}</p>
    </button>
  );
}
