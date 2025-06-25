import ProjectCard from "./ProjectCard";

type Project = {
    titel: string,
    description: string,
    imageURL: string

}

export default function Project({ projects }: { projects: Project[] }) {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-2 ">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="mx-auto">
                            <ProjectCard project={project} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}