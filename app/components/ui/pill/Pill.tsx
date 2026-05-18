import styles from "./Pill.module.css";
import { PillProps } from "../../../types/priority-threat";
export const Pill = ({type, value}: PillProps) => {
    return (
        <span className={styles.pill} data-type={type} data-value={value}>
            {value.toUpperCase()}
        </span>
    );
};