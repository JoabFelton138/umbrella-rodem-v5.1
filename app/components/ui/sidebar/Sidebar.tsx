"use client";
import { useState } from "react";
import { useSfx } from "../../../hooks/useSfx";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import styles from "./Sidebar.module.css";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarTrigger } from "./SidebarTrigger";
import retro from "../../../styles/retro.module.css";

interface SidebarProps {
    logo: string;
    imageSrc: string;
    name: string;
    email: string;
    links: SidebarLink[];
}

interface SidebarLink {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export const Sidebar = ({logo, imageSrc, name, email, links}: SidebarProps) => {
    
    const [collapsed, setCollapsed] = useState(false);
    const playCancel = useSfx("/sounds/cancel.mp3");
    const playSelect = useSfx("/sounds/select.mp3");

    const toggleSidebar = () => {
        if (collapsed) {
            playSelect();
            setCollapsed(false);
        } else {
            playCancel();
            setCollapsed(true);
        }
    };

    const companyName = `Umbrella Rodem v5.1`;

    return (
        <aside className={`${styles.sidebar} ${retro.chiseled} ${collapsed ? styles.collapsed : ""}`}>
            <SidebarHeader 
                logo={logo} 
                companyName={companyName} 
                collapsed={collapsed}
            />
            <SidebarTrigger onClick={toggleSidebar} collapsed={collapsed}/>
            <SidebarMenu links={links} collapsed={collapsed}/>
            <SidebarFooter imageSrc={imageSrc} name={name} email={email} collapsed={collapsed}/>
        </aside>
    );
};
