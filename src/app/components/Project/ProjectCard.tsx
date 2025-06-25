import { MdOpenInNew } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

type Project = {
    titel: string,
    description: string,
    imageURL: string

}
export default function ProjectCard({ project }: { project: Project }) {
    const { titel, description, imageURL } = project;
    return (
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow">
                <img className="w-full h-48 object-cover" src={imageURL} alt="Project image" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{titel}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="">
                        <button className="inline-block p-2.5 rounded-xl bg-gray-500 text-white font-medium hover:bg-blue-700 transition-colors text-4xl lg:text-2xl mx-1"><MdOpenInNew /></button>
                        <button className="inline-block p-2.5 rounded-xl bg-gray-500 text-white font-medium hover:bg-blue-700 transition-colors text-4xl lg:text-2xl mx-1"><RiGithubLine /></button>
                        
                    </div>
                </div>
            </div>
    )
}