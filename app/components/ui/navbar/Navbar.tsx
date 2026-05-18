"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

interface NavbarProps {
    links: NavLink[];
    logo: string;
};

export const Navbar = ({links, logo}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <Image 
                src={logo} 
                alt="logo" 
                priority
                className={styles.logo}
                width={240}
                height={80}
            /> 
                <ul className={styles.ul}>
                        {links.map((link) => (
                            <li className={styles.li} key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                </ul>
                <Menu className={styles.menu} onClick={() => setIsOpen(!isOpen)}/>
        </nav>
    );
};