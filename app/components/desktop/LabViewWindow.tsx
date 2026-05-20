import styles from "./LabView.module.css";
import retro from "@/app/styles/retro.module.css";

export const LabViewWindow = () => {
    return (
        <div className={`${retro.chiseled} ${styles.window}`}>
            <div className={`${retro.sunken} ${styles.labViewWindow}`} />
        </div>
    );
};