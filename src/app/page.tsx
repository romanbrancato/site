import {Building2, MapPin} from 'lucide-react'
import {ScrambleText} from "@/components/scramble-text";

export default function Home() {
    return (
        <div className="min-h-screen antialiased font-[family-name:var(--font-geist-mono)]">
            <main className="max-w-4xl mx-auto px-4 py-8">
                <nav className="flex items-center justify-between mb-12 text-sm">
                    QUADDY GOON
                </nav>
                <header className="mb-16 space-y-4">
                    <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
                <span className="inline-block">
                    <ScrambleText text={"roman brancato"} />
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
                    <p className="leading-relaxed text-[#d1d5db] animate-fade-in">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </header>
                <section className="mb-16 animate-fade-in-up">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                        <span className="text-[#AF1740] mr-2">{"&"}</span>
                        education
                    </h2>
                    <div className="space-y-8">
                        <div className="group">
                            <div
                                className="text-xl font-semibold mb-1 text-white group-hover:text-[#AF1740] transition-colors duration-200">
                                grand valley state university
                            </div>
                            <p className="text-sm text-gray-400 mb-2">
                                2020 - 2024
                            </p>
                            <p className="text-gray-300">
                                bachelor degree in computer science
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mb-16 animate-fade-in-up">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                        <span className="text-[#AF1740] mr-2">{"&"}</span>
                        work
                    </h2>
                </section>
                <section className="mb-16 animate-fade-in-up">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                        <span className="text-[#AF1740] mr-2">{"&"}</span>
                        projects
                    </h2>
                </section>
                <section className="mb-16 animate-fade-in-up sticky bottom-0">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                        <span className="text-[#AF1740] mr-2">{"&"}</span>
                        links
                    </h2>
                </section>
            </main>
        </div>
    );
}
