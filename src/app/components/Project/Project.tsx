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
    /*const projects = [
         {
      "title": "Homepage Morgenegg Gervasi",
      "description": "A work-in-progress modern website for an architecture firm, featuring a clean, responsive design and Contentful integration for easy content management.",
      "image": "/projects/homepage_morgenegg_gervasi/preview.png",
      "demo": "https://stage-morgenegg-gervasi.netlify.app/",
      "github":"",
      "date": "27/05/25",
      "tags": ["Next.js", "Bootstrap", "API"]
    }
    ]*/
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2 ">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="mx-auto">
                            {<ProjectCard project={project}/>}
                        </div>
                    )
                })}
            </div>
        </>
    )
}