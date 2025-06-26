// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    AiFillHome,
    AiOutlineFolderOpen,
    AiOutlineCode,
    AiOutlineUser,
    AiOutlineMail,
} from 'react-icons/ai';

const navItems = [
    { label: 'Home', icon: <AiFillHome />, href: '/' },
    { label: 'About', icon: <AiOutlineUser />, href: '/about' },
    { label: 'Skills', icon: <AiOutlineCode />, href: '/skills' },
    { label: 'Projects', icon: <AiOutlineFolderOpen />, href: '/projects' },
    { label: 'Contact', icon: <AiOutlineMail />, href: '/contact' },
];

export default function Navbar() {
    //const router = useRouter();

    return (
        <nav className="space-y-2 p-4 ">
            {navItems.map(({ label, icon, href }) => {
                //const isActive = router.pathname === href; 
                const isActive = false;

                return (
                    <Link
                        key={href}
                        href={href}
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
