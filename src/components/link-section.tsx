import Link from "next/link";

type Link = {
    label: string
    href: string
}

export function LinkSection({links, className = ""}: { links: Link[], className?: string }) {
    return (
        <section className={`mb-16 space-y-4 ${className}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent mr-2">{"&"}</span>
                links
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                {links.map((link, index) => (
                    <Link href={link.href} target="_blank" key={index} className="hover:text-accent">
                        {link.label}
                    </Link>
                ))}
            </div>
        </section>
    )
}