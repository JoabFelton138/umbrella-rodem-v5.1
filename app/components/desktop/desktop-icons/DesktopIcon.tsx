import retro from "@/app/styles/retro.module.css";
import styles from "./DesktopIcon.module.css";

interface DesktopIconProps {
    src: string;
    alt: string;
    name: string;
}

export const DesktopIcon = ({src, alt, name}: DesktopIconProps) => {
    return (
        <div className={`${retro.chiseled} ${retro.beveled} ${styles.iconCard}`}>
            <img 
                src={src} 
                alt={alt} 
                className={`${retro.chiseled} ${retro.beveled} ${styles.img}`} 
            />
            <p className={styles.iconName}>{name}</p>
        </div>
    );
};