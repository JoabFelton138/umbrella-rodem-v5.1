import styles from "./DataFile.module.css";
import retro from "@/app/styles/retro.module.css";

export const DataFile = () => {
    return (
        <div className={styles.dataFile}>
            <div className={styles.thumbnail} aria-hidden>
                <span className={styles.dot} />
            </div>
            <div className={`${retro.chiseled} ${styles.dataFileName}`}>
                <span className={styles.label}>
                    Data File
                </span>
            </div>
        </div>
    );
};