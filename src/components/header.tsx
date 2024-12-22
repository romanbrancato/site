import {ScrambleText} from "@/components/scramble-text";
import {Building2, MapPin} from "lucide-react";
import {HoverText} from "@/components/hover-text";

const text = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
    "            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n" +
    "            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n" +
    "            voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat\n" +
    "            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export function Header({className = ""}: { className?: string }) {
    return (
        <header className={`mb-16 space-y-4 ${className}`}>
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                <span className="inline-block">
                    <ScrambleText text={"roman brancato"} speed={0.5} playOnMount={true}/>
                </span>
        </h1>
        <div className="flex flex-col gap-2 text-gray-400">
            <div className="flex items-center gap-2">
                <MapPin size={16}/>
                <span>michigan, united states</span>
            </div>
            <div className="flex items-center gap-2">
                <Building2 size={16}/>
                <span>software developer at claimchoice</span>
            </div>
        </div>
        <HoverText text={text} className="leading-relaxed text-gray-300 transition-colors duration-200 hover:text-foreground"/>
    </header>)
}