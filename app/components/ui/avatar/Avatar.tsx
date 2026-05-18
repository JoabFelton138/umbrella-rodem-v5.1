import Image from "next/image";
import styles from "./Avatar.module.css";

interface AvatarProps {
    imageSrc: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
}

export const Avatar = ({ imageSrc, alt, width = 80, height = 80, priority }: AvatarProps) => {
    return (
            <Image 
                src={imageSrc}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className={styles.avatar}
            />
    );
}