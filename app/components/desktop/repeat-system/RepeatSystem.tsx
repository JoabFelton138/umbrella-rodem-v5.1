import { WindowFrame } from "../window/WindowFrame";
import { ColorTestStrip } from "./ColorTestStrip";
import styles from "./RepeatSystem.module.css";
import retro from "@/app/styles/retro.module.css";

export const RepeatSystem = () => {
    return (
            <WindowFrame title="Repeated System" className={styles.repeatSystem}>
                <div className={styles.repeatSystemContent}>
                    <h3 className={styles.repeatSystemContentTitle}>the tone of color</h3>
                        <ColorTestStrip variant={1} />
                        <ColorTestStrip variant={2} />
                        <ColorTestStrip variant={3} />
                    <span className={`${styles.repeatButton} ${retro.chiseled}`}>
                        repeat
                    </span>
                </div>
            </WindowFrame>
    );
};