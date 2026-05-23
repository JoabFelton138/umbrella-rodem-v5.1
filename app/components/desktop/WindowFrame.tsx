import styles from "./WindowFrame.module.css";

interface WindowFrameProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export const WindowFrame = ({title, children, className, contentClassName}: WindowFrameProps) => {
    return (
        <section className={`${styles.windowFrame} ${className ?? ""}`}>
            <div className={styles.titleBar}>
                <button className={styles.controlButton} aria-label="Minimise" />
                <div className={styles.title}>{title}</div>
                <button className={`${styles.controlButton} ${styles.maximize}`} aria-label="Maximise" />
            </div>
            <div className={`${styles.content} ${contentClassName ?? ""}`}>
                {children}
            </div>
        </section>
    );
}