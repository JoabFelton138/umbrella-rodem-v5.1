import { Avatar } from "../avatar/Avatar";
import styles from "./SidebarFooter.module.css";

interface SidebarFooterProps {
    imageSrc: string;
    name: string;
    email: string;
    collapsed: boolean;
}

export const SidebarFooter = ({imageSrc, name, email, collapsed}: SidebarFooterProps) => {
    return (
        <footer className={styles.sidebarFooter}>
            <Avatar 
                imageSrc={imageSrc} 
                alt="logo" 
                width={40} 
                height={40} 
            />
            {!collapsed && (
                <div className={styles.sidebarFooterContent}>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            )}
        </footer>
    );
}; 