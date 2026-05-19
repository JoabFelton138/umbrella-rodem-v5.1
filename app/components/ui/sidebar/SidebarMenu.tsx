import Link from "next/link";
import styles from "./SidebarMenu.module.css";

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
    return (
        <> 
            <nav className={styles.sidebarMenu}>
                {
                    links.map((link) => (
                        <Link href={link.href} key={link.href} className={styles.sidebarMenuItem}>
                            <span className={styles.sidebarMenuItemIcon}>{link.icon}</span>
                            {!collapsed && (
                                <span className={styles.sidebarMenuItemLabel}>{link.label}</span>
                            )}
                        </Link>
                    ))
                }
            </nav>
        </>
    );
};