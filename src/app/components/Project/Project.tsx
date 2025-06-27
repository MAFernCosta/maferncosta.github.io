"use client";
import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";

type Project = {
    titel: string,
    description: string,
    imageURL: string

}

export default function Project() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);
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