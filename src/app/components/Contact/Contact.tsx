import React from "react";
import { FaLinkedinIn, FaGithub, FaFreeCodeCamp } from "react-icons/fa";
import { RiGitlabFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const contacts = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/miguel-costa-0b8611298/", icon: { component: <FaLinkedinIn />, style: "text-blue-600 hover:text-blue-700" } },
    { name: "Email", link: "mailto:maferncosta@gmail.com", icon: { component: <MdEmail />, style: "text-red-600 hover:text-red-700" } },
    /*{ name: "Phone", link: "", icon: { component: <MdPhone />, style: "text-green-600 hover:text-green-700" } },*/
    {name: "Gitlab", link: "https://gitlab.com/maferncosta", icon: {component: <RiGitlabFill />,  style: "text-gray-800 hover:text-gray-600" }},
    { name: "GitHub", link: "https://github.com/MAFernCosta", icon: { component: <FaGithub />, style: "text-gray-800 hover:text-gray-600" } },
    { name: "freeCodeCamp", link: "https://www.freecodecamp.org/fcc540b9a6b-1608-4da1-9f53-5f6c2432016e", icon: { component: <FaFreeCodeCamp />, style: "text-yellow-500 hover:text-yellow-600" } },
    
]
export default function Contact() {

    return (
        <>
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-600 mb-8 text-lg">
                    Kontaktiere mich unter 
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    {contacts.map(({ name, link, icon }) =>
                        <a
                            key={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${icon.style} text-5xl transition`}
                            aria-label={name}
                        >
                            {icon.component}
                        </a>
                    )}


                </div>
            </div>
        </>
    )
}