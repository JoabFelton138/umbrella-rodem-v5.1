import { DesktopIcon } from "./DesktopIcon";
import styles from "./DesktopIcons.module.css";

export const DesktopIcons = () => {
    
    const desktopIcons = [
        { src: "/desktop-icons/desktop-icon1.png", alt: "System", name: "System" },
        { src: "/desktop-icons/desktop-icon2.png", alt: "Test", name: "Test" },
    ];
    
    return (
        <div className={styles.desktopIconsContainer}>
            {
                desktopIcons.map((icon) => (
                    <DesktopIcon 
                        src={icon.src} 
                        alt={icon.alt}
                        name={icon.name}
                        key={icon.src}
                    />
                ))
            }
        </div>
    );
}