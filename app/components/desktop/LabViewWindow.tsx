import { horizontal, vertical } from "@/app/types/orientation";
import styles from "./LabView.module.css";
import { WindowFrame } from "./WindowFrame";
import { WindowScrollbar } from "./WindowScrollbar";

export const LabViewWindow = () => {
    return (
        <WindowFrame className={`${styles.window}`}>
            <img 
                src="/lab.webp" 
                alt="Lab View" 
                className={`${styles.labViewImage}`} 
            />
            <WindowScrollbar orientation={vertical} />
            <WindowScrollbar orientation={horizontal} />
        </WindowFrame>
    );
};