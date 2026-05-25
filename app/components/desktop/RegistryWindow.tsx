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
                        <p className={styles.systemLine}>
                            <span className={`${styles.typeLine} ${styles.typeSystem}`}>
                                {`UMBRELLA "RODEM" SYSTEM`}
                            </span>
                        </p>
                        <p className={styles.version}>
                            <span className={`${styles.typeLine} ${styles.typeVersion}`}>
                                Ver 5.1
                            </span>
                        </p>
                        <p>
                            <span className={`${styles.typeLine} ${styles.typeStaff}`}>
                                Culture Experiment Room Staff
                            </span>
                        </p>
                        <div className={styles.registryText}>
                            <p>
                                <span className={`${styles.typeLine} ${styles.typeRegistry}`}>
                                    Registry.
                                </span>
                            </p>
                            <p>
                                <span className={`${styles.typeLine} ${styles.typeAccessing}`}>
                                    Accessing ...
                                </span>
                            </p>
                            <p>
                                <span className={`${styles.typeLine} ${styles.typeUsername}`}>
                                    Enter your username.
                                </span>
                            </p>
                        </div>
                    </div>
                <div className={styles.registryInputLine}>
                    <span className={styles.promptPrefix} aria-hidden="true">{">"}</span>
                    <textarea 
                        className={styles.registryInput} 
                        aria-label="Registry Input"
                        spellCheck={false}
                    />
                </div>
            </div>
            <WindowScrollbar orientation={vertical} />
            <WindowScrollbar orientation={horizontal} />
        </WindowFrame>
    );
};