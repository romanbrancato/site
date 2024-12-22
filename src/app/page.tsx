import {Header} from "@/components/header";
import {ContactSection} from "@/components/contact-section";
import {SectionList} from "@/components/section-list";
import {LinkSection} from "@/components/link-section";
import {ProjectSection} from "@/components/project-section";

const education = [{
    title: "grand valley state university",
    period: "2020-2024",
    description: "bachelor's degree in computer science",
}]

const work = [{
    title: "claimchoice",
    role: "software developer",
    period: "2024-present",
    description: "BRUHH"
}]

const projects = [{
    title: "project 1",
    period: "2024",
    role: "developer and maintainer",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "www.google.com",
    tags: ["goat", "shit"]
}]

const links = [{
    label: "github",
    href: "https://github.com/romanbrancato"
},
    {label: "linkedin",
    href: "https://www.linkedin.com/in/romanbrancato/"}
]

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-mono)]">
            <main className="max-w-4xl mx-auto px-4 py-8">
                <ContactSection/>
                <Header className="animate-fade-in"/>
                <SectionList section={"work"} items={work} className="animate-fade-in-up-from-right delay-100"/>
                <ProjectSection projects={projects} className="animate-fade-in-up-from-right delay-200" />
                <SectionList section={"education"} items={education} className="animate-fade-in-up-from-right delay-300"/>
                <LinkSection links={links} className="animate-fade-in-up-from-right delay-400"/>
            </main>
        </div>
    );
}
