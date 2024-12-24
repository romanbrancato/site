"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {ScrambleText} from '@/components/scramble-text';

type Link = {
    label: string;
    href: string;
};

export function LinkSection({ links, className = "" }: { links: Link[], className?: string }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className={`mb-16 space-y-4 ${className}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent mr-2">{"&"}</span>
                <ScrambleText text="links" />
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        target="_blank"
                        key={index}
                        className="hover:text-accent transition-colors duration-200"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <ScrambleText
                            text={hoveredIndex === index ? link.href : link.label}
                            step={10}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
