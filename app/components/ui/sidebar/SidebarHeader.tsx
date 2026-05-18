import Image from "next/image";
import styles from "./SidebarHeader.module.css";

interface SidebarHeaderProps {
    logo: string;
    companyName: string;
    companyDescription?: string;
    collapsed: boolean;
}

export const SidebarHeader = ({logo, companyName, companyDescription, collapsed}: SidebarHeaderProps) => {
    return (
        <header className={`${styles.sidebarHeader} ${collapsed ? styles.collapsed : ""}`}>
            <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                loading="eager"
            />
            {!collapsed && (
                <div className={styles.sidebarHeaderContent}>
                    <p>{companyName}</p>
                    <p>{companyDescription}</p>
                </div>
            )}
        </header>
    );
};