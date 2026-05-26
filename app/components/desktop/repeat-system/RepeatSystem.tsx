import { WindowFrame } from "../window/WindowFrame";
import styles from "./RepeatSystem.module.css";

export const RepeatSystem = () => {
    return (
            <WindowFrame title="Repeated System" className={styles.repeatSystem}>
                <div className={styles.repeatSystemContent}>
                    <span>the tone of color</span>
                </div>
            </WindowFrame>
    );
};