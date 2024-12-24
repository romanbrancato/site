import {Header} from "@/components/header";
import {SectionList} from "@/components/section-list";
import {LinkSection} from "@/components/link-section";
import {ProjectSection} from "@/components/project-section";
import {resume} from "@/data/resume";

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-mono)]">
            <main className="max-w-4xl mx-auto px-4 py-8">
                <Header data={resume.header} className="animate-fade-in"/>
                <SectionList section={"work"} items={resume.work} className="animate-fade-in-down delay-100"/>
                <ProjectSection projects={resume.projects} className="animate-fade-in-down delay-200"/>
                <SectionList section={"education"} items={resume.education} className="animate-fade-in-down delay-300"/>
                <LinkSection links={resume.links} className="animate-fade-in-down delay-400"/>
            </main>
        </div>
    );
}
