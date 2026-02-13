import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
    image: string;
    name: string;
    description: string;
    price: string;
    startingFromText: string;
    ctaText: string;
    whatsappUrl?: string;
}

export default function ProductCard({
    image,
    name,
    description,
    price,
    startingFromText,
    ctaText,
    whatsappUrl
}: ProductCardProps) {
    return (
        <article className="bg-white rounded-xl overflow-hidden p-4 md:p-6 lg:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">
                {name}
            </h3>
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <p className="text-lg text-gray-900 font-semibold mb-2">
                {startingFromText}{' '}
                <span className="text-primary-500 font-semibold">
                    {price}
                </span>
            </p>
            <p className="text-base text-gray-500 mb-4 line-clamp-1">
                {description}
            </p>
            {whatsappUrl && (
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    {ctaText}
                </Link>
            )}
        </article>
    );
}
