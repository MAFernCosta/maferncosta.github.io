import { FaReact, FaBootstrap, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';


export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={35} /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" size={35} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={35} /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={35} /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" size={35} /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={35} /> },
    { name: 'Git', icon: <FaGitAlt  style={{color:"#f05133"}} size={35}/> },
    { name: 'Tailwindcss', icon: <RiTailwindCssFill style={{color:"#00bcff"}} size={35}/> }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center p-4 border rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition"
        >
          {skill.icon}
          <span className="mt-2 text-base font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}