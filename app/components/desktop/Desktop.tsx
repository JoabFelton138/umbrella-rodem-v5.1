"use client";
import { LabViewWindow } from "./lab-view/LabViewWindow";
import styles from "./Desktop.module.css";
import { DesktopIcons } from "./desktop-icons/DesktopIcons";
import { DataFile } from "./data-file/DataFile";
import { RegistryWindow } from "./registry-window/RegistryWindow";
import { RepeatSystem } from "./repeat-system/RepeatSystem";
import { Error } from "../error-dialogue/Error";
import { useEffect, useState } from "react";

export const Desktop = () => {
    const [isMobile, setIsMobile] = useState(false);
    const errorMessage = "Error: Recalibrate your system before continuing.";

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 900);
        });
    }, []);

    return (
        <div className={styles.desktop}>
      
            {isMobile ? 
                <Error message={errorMessage}/> 
                : 
                <>
                    <DesktopIcons />
                    <RegistryWindow />
                    <div className={styles.labCluster}>
                        <LabViewWindow />
                        <RepeatSystem />
                    </div>
                    <DataFile />
                </>}
        </div>
    );
};