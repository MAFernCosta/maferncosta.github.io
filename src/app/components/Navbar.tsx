// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import { useState } from "react";




type NavItems = {
    label: string;
    icon: ReactNode;
    to: string;
    component: ReactNode | string;
};

export default function Navbar({ navItems }: { navItems: NavItems[] }) {
    //const router = useRouter();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    return (
        <nav>
            <button
                onClick={() => setIsNavbarOpen((prev) => !prev)}
                className="fixed top-4 right-10 z-6 p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors lg:hidden"
                aria-label="Toggle Menu"
            >
                {isNavbarOpen ? <IoMdClose className="w-10 h-10" /> : <FiMenu className="w-10 h-10" />}
                
                
            </button>
            <section 
            className={`${isNavbarOpen ? 'block' : 'hidden'} lg:hidden fixed top-0 
            left-0 z-5 h-screen w-screen bg-gray-100 space-y-2 p-4 flex-col justify-center content-center`} >
                
                    {navItems.map(({ label, icon, to }) => {
                        //const isActive = router.pathname === href; 
                        const isActive = false;

                        return (
                            <Link
                                key={to}
                                href={`#${to}`}
                                onClick={() => setIsNavbarOpen((prev) => !prev)}
                                className={`flex items-center justify-center gap-4 px-4 py-2 rounded-lg transition-all duration-200
                ${isActive
                                        ? 'bg-gray-100  text-black  font-semibold'
                                        : ' hover:bg-gray-50'
                                    }`}
                            >
                                <div className="text-xl">{icon}</div>
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                
            </section>
            <section className= 'hidden lg:block' >
                <div className='space-y-2 p-4 justify-center lg:flex-col'>
                    {navItems.map(({ label, icon, to }) => {
                        //const isActive = router.pathname === href; 
                        const isActive = false;

                        return (
                            <Link
                                key={to}
                                href={`#${to}`}
                                className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-200
                ${isActive
                                        ? 'bg-gray-100  text-black  font-semibold'
                                        : ' hover:bg-gray-50'
                                    }`}
                            >
                                <div className="text-xl">{icon}</div>
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                </div>
            </section>

        </nav>

    )
}
