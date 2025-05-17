import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {ScrambleText} from "@/components/scramble-text";
import {SplitText} from "@/components/split-text";

type Project = {
    title: string
    period: string
    role: string
    description: string
    tags: string[]
    href: string
}

export function ProjectSection({projects}: { projects: Project[]}) {
    const Content = ({project}: { project: Project }) => (
        <div className="group mb-4">
            <div
                className={`flex flex-row items-center gap-x-2 text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-200`}>
                {project.title}
                <ArrowUpRight size={16} className="text-accent transform transition-transform group-hover:translate-x-[5px] group-hover:-translate-y-[5px]"/>
            </div>
            {(project.role || project.period) && (
                <p className="text-sm text-gray-400 mb-2 gap-2">
                    <span> {project.role} </span>
                    <span> {project.role && project.period && "|"} </span>
                    <span> {project.period} </span>
                </p>
            )}
            <SplitText text={project.description} className="text-gray-300 transition-colors hover:duration-0 duration-1000 ease-out hover:text-foreground"/>
            {project.tags.map((tag, index) => (
                <label key={index}
                       className="inline-block bg-gray-400 bg-opacity-25 rounded text-xs mt-2 px-2 py-1 mr-1">
                    {tag}
                </label>
            ))}
        </div>
    );

    return (
        <section className={`mb-16`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent mr-2">{"&"}</span>
                <ScrambleText text={"projects"}/>
            </h2>
            <div className="space-y-8">
                {projects.map((project, index) => (
                        <Link href={project.href} target="_blank" key={index}>
                            <Content project={project}/>
                        </Link>
                ))}
            </div>
        </section>
    );
}