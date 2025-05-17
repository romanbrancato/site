import {Header} from "@/components/header";
import {SectionList} from "@/components/section-list";
import {LinkSection} from "@/components/link-section";
import {ProjectSection} from "@/components/project-section";
import {resume} from "@/data/resume";

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-mono)]">
            <main className="max-w-4xl mx-auto px-4 py-8">
                <Header data={resume.header} />
                <SectionList section={"work"} items={resume.work} />
                <ProjectSection projects={resume.projects}/>
                <SectionList section={"education"} items={resume.education}/>
                <LinkSection links={resume.links}/>
            </main>
        </div>
    );
}
