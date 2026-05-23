import { LabViewWindow } from "./LabViewWindow";
import styles from "./Desktop.module.css";
import { DesktopIcons } from "./DesktopIcons";
import { DataFile } from "./DataFile";
import { RegistryWindow } from "./RegistryWindow";

export const Desktop = () => {
    return (
        <div className={styles.desktop}>
            <DesktopIcons />
            <RegistryWindow />
            <LabViewWindow />
            <DataFile />
        </div>
    );
};