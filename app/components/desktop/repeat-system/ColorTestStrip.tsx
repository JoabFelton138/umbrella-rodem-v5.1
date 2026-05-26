import styles from "./ColorTestStrip.module.css";
import retro from "@/app/styles/retro.module.css";

interface ColorTestStripProps {
    variant: 1 | 2 | 3;
}

const STRIP_VARIANTS = {
    1: [
      { color: "blue", flex: 2 },
      { color: "red", flex: 1 },
    ],
    2: [
      { color: "green", flex: 3 },
      { color: "yellow", flex: 1 },
      { color: "blue", flex: 2 },
    ],
    3: [
      { color: "pink", flex: 5 },
      { color: "blue", flex: 1 },
    ],
}

export const ColorTestStrip = ({variant} : ColorTestStripProps) => {
    const segments = STRIP_VARIANTS[variant];
    return (
        <div className={`${styles.strip} ${retro.sunken}`}>
            {segments.map((segment) => (
                <div 
                    key={`${segment.color}-${segment.flex}`}
                    className={`${styles.segment} 
                                ${styles[segment.color]} 
                                ${styles[`flex-${segment.flex}`]
                            }`}
                />
            ))}
        </div>
    );

}