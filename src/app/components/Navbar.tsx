// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { Component } from 'react';
import { IconType } from 'react-icons';

type NavItems = {
  label: string;
  icon: ReactNode;
  to: string;
  component: ReactNode | string;
};

export default function Navbar({ navItems } : { navItems: NavItems[] }) {
    //const router = useRouter();

    return (
        <nav className="space-y-2 p-4 flex flex-row justify-center lg:flex-col">
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
        </nav>

    )
}
