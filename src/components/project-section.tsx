import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

type Project = {
    title: string
    period: string
    role: string
    description: string
    tags: string[]
    href: string
}

export function ProjectSection({projects, className=""}: { projects: Project[], className: string }) {
    const Content = ({project}: { project: Project }) => (
        <div className="group">
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
            <p className="text-gray-300">{project.description}</p>
            {project.tags.map((tag, index) => (
                <label key={index}
                       className="inline-block border border-gray-400 rounded text-xs mt-4 px-2 py-1 mr-1">
                    {tag}
                </label>
            ))}
        </div>
    );

    return (
        <section className={`mb-16 ${className}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-accent mr-2">{"&"}</span>
                projects
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