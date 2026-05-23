import styles from "./RegistryWindow.module.css";

import { horizontal, vertical } from "@/app/types/orientation";
import { WindowFrame } from "./WindowFrame";
import { WindowScrollbar } from "./WindowScrollbar";

export const RegistryWindow = () => {
    return (
        <WindowFrame 
            title="Program (1:1)" 
            className={styles.registryWindow} 
            contentClassName={styles.transparentContent}
        >
            <div className={styles.registryContent}>
                    <div className={styles.registryHeader} aria-hidden="true">
                        <p className={styles.systemLine}>{`UMBRELLA "RODEM" SYSTEM`}</p>
                        <p className={styles.version}>Ver 5.1</p>
                        <p>Culture Experiment Room Staff</p>
                        <p>Registry.</p>
                    </div>
                    <textarea 
                        className={styles.registryInput} 
                        aria-label="Registry Input"
                        spellCheck={false}
                    />
            </div>
            <WindowScrollbar orientation={vertical} />
            <WindowScrollbar orientation={horizontal} />
        </WindowFrame>
    );
};