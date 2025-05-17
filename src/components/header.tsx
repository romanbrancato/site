import {ScrambleText} from "@/components/scramble-text";
import {Building2, MapPin} from "lucide-react";
import {SplitText} from "@/components/split-text";

type Data = {
    name: string,
    phone: string,
    email: string,
    location: string,
    job: string,
    summary: string,
}

export function Header({data, className = ""}: { data: Data, className?: string }) {
    return (
        <>
            <section className="flex items-center justify-between mb-12 text-sm text-gray-300">
                <span> {data.phone} </span>
                <span> {data.email} </span>
            </section>
            <header className={`mb-16 space-y-4 ${className}`}>
                <h1 className="text-4xl font-bold mb-4">
                <span className="inline-block">
                    <ScrambleText text={data.name} playOnMount={true}/>
                </span>
                </h1>
                <div className="flex flex-col gap-2 text-gray-400">
                    <div className="flex items-center gap-2">
                        <MapPin size={16}/>
                        <span>{data.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building2 size={16}/>
                        <span>{data.job}</span>
                    </div>
                </div>
                <SplitText text={data.summary}
                           className="leading-relaxed text-gray-300 transition-colors hover:duration-0 duration-1000 ease-out hover:text-accent"/>
            </header>
        </>
    )
}