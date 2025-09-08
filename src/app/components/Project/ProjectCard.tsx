import { MdOpenInNew } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

type Project = {
    title: string,
    description: string,
    image: string,
    demo: string,
    github:string,
    tags: string[]

}
export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, image, demo, github, tags } = project;
    return (
            <div className=" rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow h-[29rem] sm:w-[560px] md:w-[360px] lg:w-[560px] xl:w-[400px] 2xl:w-[360px]">
                <img className="w-full h-48 object-cover" src={image} alt="Project image" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 h-[6.5rem]">{description}</p>
                    {tags.map(item=>
                        <span key={item} className="pe-1.5 text-xs text-gray-500">
                            {item}
                            </span>
                    )}
                    <div className="my-4 ">
                        {demo && 
                        <a
                        target="_blank"
                        href={demo} 
                        className="inline-block p-2.5 rounded-xl bg-gray-500 text-white font-medium hover:bg-blue-700 transition-colors text-4xl lg:text-2xl mx-1" 
                        ><MdOpenInNew />
                        </a>
                        }
                        {github&&
                        <a 
                        target="_blank"
                        href={github}
                        className="inline-block p-2.5 rounded-xl bg-gray-500 text-white font-medium hover:bg-blue-700 transition-colors text-4xl lg:text-2xl mx-1"
                        ><RiGithubLine />
                        </a>
                        }
                        
                        
                    </div>
                </div>
            </div>
    )
}