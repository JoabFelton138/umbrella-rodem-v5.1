import styles from "./LabView.module.css";
import retro from "@/app/styles/retro.module.css";

export const LabViewWindow = () => {
    return (
        <div className={`${retro.chiseled} ${styles.window}`}>
            <img 
                src="/lab.webp" 
                alt="Lab View" 
                className={`${styles.labViewImage} ${retro.sunken}`} 
            />
        </div>
    );
};