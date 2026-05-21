import { LabViewWindow } from "./LabViewWindow";
import styles from "./Desktop.module.css";
import { DesktopIcons } from "./DesktopIcons";
import { DataFile } from "./DataFile";

export const Desktop = () => {
    return (
        <div className={styles.desktop}>
            <DesktopIcons />
            <LabViewWindow />
            <DataFile />
        </div>
    );
};