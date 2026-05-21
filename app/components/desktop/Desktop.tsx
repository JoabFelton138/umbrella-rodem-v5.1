import { LabViewWindow } from "./LabViewWindow";
import styles from "./Desktop.module.css";
import { DesktopIcons } from "./DesktopIcons";

export const Desktop = () => {
    return (
        <div className={styles.desktop}>
            <DesktopIcons />
            <LabViewWindow />
        </div>
    );
};