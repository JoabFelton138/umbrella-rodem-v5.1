import { Button } from "../button/Button";
import styles from "./InfoPopover.module.css";

interface InfoPopoverProps {
    text: string;
}
export const InfoPopover = ({text}: InfoPopoverProps) => {
    return (
        <div className={styles.popoverContainer}>
            <Button className={styles.popoverButton}/>
            <div className={styles.popoverTextbox}>
                {text}
            </div>
        </div>
    )
};