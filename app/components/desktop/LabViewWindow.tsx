import styles from "./LabView.module.css";
import { WindowFrame } from "./WindowFrame";

export const LabViewWindow = () => {
    return (
        <WindowFrame className={`${styles.window}`}>
            <img 
                src="/lab.webp" 
                alt="Lab View" 
                className={`${styles.labViewImage}`} 
            />
        </WindowFrame>
    );
};