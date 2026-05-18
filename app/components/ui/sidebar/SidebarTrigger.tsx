"use client";
import { Button } from "../button/Button";
import { PanelLeft } from "lucide-react";
import styles from "./SidebarTrigger.module.css";

interface SidebarTriggerProps {
    onClick: () => void;
}

export const SidebarTrigger = ({onClick}: SidebarTriggerProps) => {
    return (
        <Button
            variant="ghost"
            iconOnly
            icon={<PanelLeft size={16} />}
            ariaLabel="Toggle sidebar"
            onClick={() => onClick()}
            className={styles.sidebarTrigger}
        />
    );
};