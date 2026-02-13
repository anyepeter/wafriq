'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface DemoProps {
    ctaSecondaryText?: string;
    children?: React.ReactNode;
    className?: string;
    variant?: "outline" | "default" | "link" | "destructive" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
    showIcon?: boolean;
}

export default function Demo({
    ctaSecondaryText,
    children,
    className,
    variant = "outline",
    size = "lg",
    showIcon = true
}: DemoProps) {
    const [showDemo, setShowDemo] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if (showDemo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showDemo]);

    return (
        <>
            <Button
                variant={variant}
                size={size}
                className={className || "px-6 lg:px-3 xl:px-6 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out gap-2"}
                onClick={() => {
                    setShowDemo(true);
                    setVideoLoaded(false);
                }}
            >
                {showIcon && (
                    <svg
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
                {children || ctaSecondaryText}
            </Button>
            {showDemo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowDemo(false)}
                >
                    <div
                        className="relative w-[90vw] max-w-4xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowDemo(false)}
                            className="absolute -top-10 right-0 z-20 text-white hover:text-gray-300 transition-colors"
                            aria-label="Close video"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {!videoLoaded && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black rounded-xl">
                                <svg className="w-10 h-10 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                            </div>
                        )}
                        <iframe
                            src="https://www.youtube.com/embed/aYUZjSq1jpY?autoplay=1"
                            title="Wafriq Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => setVideoLoaded(true)}
                            className="w-full h-full rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
