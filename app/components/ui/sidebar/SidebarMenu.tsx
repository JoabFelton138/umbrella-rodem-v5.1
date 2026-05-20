"use client";
import Link from "next/link";
import styles from "./SidebarMenu.module.css";
import { useSfx } from "@/app/hooks/useSfx";

interface SidebarMenuProps {
    links: SidebarLink[];
    collapsed: boolean;
}

interface SidebarLink {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export const SidebarMenu = ({links, collapsed}: SidebarMenuProps) => {
    
    const playNavigate = useSfx("/sounds/navigate.mp3");
    const playSelect = useSfx("/sounds/select.mp3");

    const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
        if (e.target.matches(":focus-visible")) {
            playNavigate();
        }
    };
    
    return (
        <nav className={styles.sidebarMenu}>
            {
                links.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.href} 
                        onClick={playSelect}
                        onFocus={handleFocus}
                        onMouseEnter={playNavigate}
                        className={styles.sidebarMenuItem}>
                            <span className={styles.sidebarMenuItemIcon}>
                                {link.icon}
                            </span>
                            {!collapsed && (
                                <span className={styles.sidebarMenuItemLabel}>
                                    {link.label}
                                </span>
                            )}
                    </Link>
                ))
            }
        </nav>
    );
};