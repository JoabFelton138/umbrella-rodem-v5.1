"use client";

import styles from "./Menu.module.css";
import Image from "next/image";
import retro from "@/app/styles/retro.module.css";
import Link from "next/link";
import { useSfx } from "@/app/hooks/useSfx";


interface MenuProps {
    logo: string;
    links: MenuLink[];
}

interface MenuLink {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export const Menu = ({logo, links}: MenuProps) => {
    const playSelect = useSfx("/sounds/select.mp3");
    const playNavigate = useSfx("/sounds/navigate.mp3");

    const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
        if (e.target.matches(":focus-visible")) {
            playNavigate();
        }
    };

    return (
        <nav className={`${styles.menu} ${retro.chiseled}`} aria-label="Primary Navigation"> 
            <Image src={logo} alt="" width={40} height={40} aria-hidden/>
            <ul className={styles.links}>
                {
                    links.map((link) => (
                        <li key={link.href}>
                            <Link 
                                href={link.href} 
                                className={styles.link}
                                onClick={playSelect}
                                onFocus={handleFocus}
                                onMouseEnter={playNavigate}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}