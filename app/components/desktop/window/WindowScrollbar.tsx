import styles from "./WindowScrollbar.module.css";

interface WindowScrollbarProps {
    orientation: "horizontal" | "vertical";
}

export const WindowScrollbar = ({orientation}: WindowScrollbarProps) => {
    return (
        <div
            className={`${styles.scrollbar} ${styles[orientation]}`}
            aria-hidden
        >
            <div className={styles.thumb} />

                {orientation === "horizontal" && 
                    <>
                        <div className={styles.scroll} aria-hidden />
                        <button className={`${styles.cornerButton}`} aria-label="Scrollbar Corner" />
                    </>
                }
            </div>
    );
};