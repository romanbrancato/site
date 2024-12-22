import Link from "next/link";
import {ScrambleText} from "@/components/scramble-text";
import {HoverText} from "@/components/hover-text";

export type Item = {
    title: string
    href?: string
    role?: string
    period?: string
    description: string
}

export function SectionList({section, items, className=""}: { section: string, items: Item[], className: string }) {
    const Content = ({item}: { item: Item }) => (
        <>
            <div
                className={`text-xl font-semibold mb-1 text-foreground ${item.href && "group-hover:text-accent"} transition-colors duration-200`}>
                {item.title}
            </div>
            {(item.role || item.period) && (
                <p className="text-sm text-gray-400 mb-2 gap-2">
                    <span> {item.role} </span>
                    <span> {item.role && item.period && "|"} </span>
                    <span> {item.period} </span>
                </p>
            )}
            <HoverText text={item.description} className="text-gray-300 transition-colors hover:duration-0 duration-1000 ease-out hover:text-foreground"/>
        </>
    );

    return (
        <section className={`mb-16 ${className}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent mr-2">{"&"}</span>
                <ScrambleText text={section}/>
            </h2>
            <div className="space-y-8">
                {items.map((item, index) => (
                    <div key={index} className="group">
                        {item.href ? (
                            <Link href={item.href} target="_blank">
                                <Content item={item}/>
                            </Link>
                        ) : (
                            <Content item={item}/>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}