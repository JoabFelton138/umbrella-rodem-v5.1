import { LabViewWindow } from "./lab-view/LabViewWindow";
import styles from "./Desktop.module.css";
import { DesktopIcons } from "./desktop-icons/DesktopIcons";
import { DataFile } from "./data-file/DataFile";
import { RegistryWindow } from "./registry-window/RegistryWindow";
import { RepeatSystem } from "./repeat-system/RepeatSystem";
import { Error } from "../error-dialogue/Error";

export const Desktop = () => {
    return (
        <div className={styles.desktop}>
            <DesktopIcons />
            {/* <RegistryWindow /> */}
            <div className={styles.labCluster}>
                <LabViewWindow />
                <RepeatSystem />
            </div>
            <DataFile />
        </div>
    );
};