import { TriangleAlertIcon } from "lucide-react";
import styles from "./Error.module.css";
import retro from "@/app/styles/retro.module.css";

interface ErrorProps {
    title?: string;
    message?: string;
}

export const Error = ({ title, message }: ErrorProps) => {

    const defaultMessage = "Asset index corrupted. Operator intervention required";

    return (
        <div className={`${styles.errorContainer} ${retro.chiseled}`}>
            <div className={styles.errorHeader}>
                {title ?? "System Error"}
            </div>
            <div className={styles.errorMessage}>
                <TriangleAlertIcon size={65} className={styles.errorIcon} />
                <h1 className={styles.errorMessageText}>{message ?? defaultMessage}</h1>
            </div>
        </div>
    );
};