import retro from "@/app/styles/retro.module.css";
import styles from "./CardGrid.module.css";

export const CardShell = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={`${retro.chiseled} ${styles.card}`}>
            <div className={`${retro.sunken} ${styles.cardInner}`}>
                {children}
            </div>
        </div>
    );
};