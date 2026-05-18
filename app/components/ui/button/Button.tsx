import styles from "./Button.module.css";

interface ButtonProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";    
    size?: "small" | "medium" | "large";
    iconOnly?: boolean;
    ariaLabel?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit";
}

export const Button = ({ 
                        children,
                        icon,
                        variant = "primary",
                        size = "medium",
                        iconOnly = false,
                        ariaLabel,
                        onClick,
                        type = "button",
                        className,
                        }: ButtonProps) => 
                        {
    
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        iconOnly ? styles.iconOnly : styles[size],
        className,
    ].filter(Boolean).join(" ");
                            
    return (
        <button 
            className={classes}
            onClick={onClick}
            type={type}
            aria-label={ariaLabel}
        >
            {icon}
            {children}
        </button>
    );
};