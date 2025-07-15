import Image from "next/image";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar";
import {
  AiFillHome,
  AiOutlineFolderOpen,
  AiOutlineCode,
  AiOutlineUser,
  AiOutlineMail,
} from 'react-icons/ai';




export default function Home() {
  const imageSize = 200;
  const logoSize = 70;
  const nav = [
    { label: "About me", to: "#about", component: <AboutMe /> },
    { label: "Skills", to: "", component: <Skills /> },
    { label: "Projects", to: "", component: <Project /> },
    { label: "Contact", to: "", component: <Contact /> },
  ];
  const content = [
    { label: 'Home', icon: <AiFillHome />, to: '/', component: "" },
    { label: 'About me', icon: <AiOutlineUser />, to: 'about', component: <AboutMe /> },
    { label: 'Skills', icon: <AiOutlineCode />, to: 'skills', component: <Skills /> },
    { label: 'Projects', icon: <AiOutlineFolderOpen />, to: 'projects', component: <Project /> },
    { label: 'Contact', icon: <AiOutlineMail />, to: 'contact', component: <Contact /> },
  ];
  return (
    <div className="container mx-auto lg:px-4">
      <aside className="pb-1 w-full lg:p-0 lg:w-90 lg:h-dvh lg:fixed bg-gray-100 text-black">
        <div className="flex flex-col lg:flex-col-reverse">
          <Navbar navItems={content} />
          <div>
            <div className="flex flex-col items-center pt-5">
              <Image
                src="/images/profile-image.jpg"
                alt="Profile Image"
                className="rounded-full"
                width={imageSize}
                height={imageSize}
              ></Image>
              <h1 className="text-4xl mt-4 font-semibold">Miguel Costa</h1>
            </div>
            <p className="m-4.5 text-gray-800">
              Self-taught fullstack web developer focused on building clean, modern, and responsive websites.
            </p>
          </div>
        </div>

      </aside>

      <main className="lg:ml-90 bg-gray-100 text-black ©">
        {content.map(({ label, to, component }) => {
          if (label !== "Home") {
            return (
              <section className="pt-10 px-2 pb-10 bg-gray-50 md:px-5 " id={to} key={label}>
                <h2 className="text-5xl font-semibold mb-10 text-gray-800">{label}</h2>
                {component}
              </section>
            )
          }
        })}

      </main>
      <footer className="lg:fixed lg:-mt-0 z-1 bottom-1 bg-gray-100 text-gray-500 flex flex-col items-center lg:w-90 pb-4 lg:pb-1">
        <Image
          alt="logo"
          src="/images/miguel_costa_logo.svg"
          width={logoSize}
          height={logoSize} />
        <span className="-mt-5 text-xs">Made by Miguel Costa using Tailwind and Next.js</span>
      </footer>
    </div>
  );
}
