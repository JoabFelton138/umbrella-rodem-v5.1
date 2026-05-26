import styles from "./StatusPanel.module.css";
import retro from "@/app/styles/retro.module.css";

const statusPanelVariants = [
    { metric: 77 }, 
    { metric: 52 }, 
    { metric: "09:28" }
];

export const StatusPanel = () => {
    return (
        <div className={styles.statusPanel}>
            {statusPanelVariants.map((variant) => (
                <span 
                    key={variant.metric}
                    className={`${styles.statusPanelMetric} ${retro.sunken}`}>
                        {variant.metric}
                </span>
            ))}
            <button className={`${styles.statusPanelButton} ${retro.chiseled}`}>
                <span className={styles.playIcon} aria-hidden="true"/>
            </button>
        </div>
    );
};