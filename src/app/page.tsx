import Image from "next/image";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";





export default function Home() {
  const imageSize = 200;
  const logoSize = 70;

  const projects = [
    {
      titel: "Random Quote Machine",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ab eveniet modi nemo voluptas?",
      imageURL: "/images/projects/random-quote-machine.png"
    },
    {
      titel: "Cash Register",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ab eveniet modi nemo voluptas?",
      imageURL: "/images/projects/cash-register.png"
    },
    {
      titel: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ab eveniet modi nemo voluptas?",
      imageURL: "https://placehold.co/600x400"
    },
    {
      titel: "Lorem.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ab eveniet modi nemo voluptas?",
      imageURL: "https://placehold.co/600x400/orange/white"
    },
    {
      titel: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ab eveniet modi nemo voluptas?",
      imageURL: "https://placehold.co/600x400/black/white"
    },

  ]
  const nav = [
    { label: "About me", to: "", component: <AboutMe /> },
    { label: "Skills", to: "", component: <Skills /> },
    { label: "Projects", to: "", component: <Project projects={projects} /> },
    { label: "Contact", to: "", component: <Contact /> },
  ];
  return (
    <div className="container mx-auto lg:px-4">
      <aside className="pb-1 w-full lg:p-0 lg:w-90 lg:h-dvh lg:fixed bg-gray-100 text-black">
        <div className="flex flex-col lg:flex-col-reverse">
          <nav className="border-b-1 lg:border-0">
            <ul className="p-2 w-full flex justify-between lg:flex-col">
              {nav.map(({ label, to }, index) =>
                <li
                  className="pb-1 inline-block lg:inline"
                  key={index}
                >
                  <a
                    href={to}
                    className="block p-2 text-lg hover:bg-gray-200 "
                  >
                    {label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
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
        {nav.map(({ label, to, component }) => {
          return (
            <section className="pt-10 px-2 pb-10 bg-gray-50 md:px-5 " id={to} key={label}>
              <h2 className="text-5xl font-semibold mb-10 text-gray-800">{label}</h2>
              {component}
            </section>
          )
        })}

      </main>
      <footer className="lg:fixed lg:-mt-0 z-1 bottom-1 bg-gray-100 text-gray-500 flex flex-col items-center lg:w-90 pb-4 lg:pb-1">
        <Image 
        alt="logo"
        src="/images/miguel_costa_logo.svg"
        width={logoSize}
        height={logoSize} />
        <span className="-mt-5">Made by Miguel Costa</span>
      </footer>
    </div>
  );
}
