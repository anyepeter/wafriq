import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
    image: string;
    name: string;
    description: string;
    price: string;
    startingFromText: string;
    ctaText: string;
    onClick?: () => void;
}

export default function ProductCard({
    image,
    name,
    description,
    price,
    startingFromText,
    ctaText,
    onClick
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
            <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors"
                onClick={onClick}
            >
                {ctaText}
            </Button>
        </article>
    );
}
