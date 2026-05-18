import { PillProps } from "@/app/types/pills";
import styles from "./Pill.module.css";
export const Pill = ({type, value}: PillProps) => {
    return (
        <span className={styles.pill} data-type={type} data-value={value}>
            {value.toUpperCase()}
        </span>
    );
};