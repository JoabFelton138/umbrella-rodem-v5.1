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
    
    return (
        <nav className={styles.sidebarMenu}>
            {
                links.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.href} 
                        onFocus={playNavigate}
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