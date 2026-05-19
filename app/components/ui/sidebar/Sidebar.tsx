"use client";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import styles from "./Sidebar.module.css";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarTrigger } from "./SidebarTrigger";
import { useState } from "react";
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

    const companyName = `Umbrella Rodem v5.1`;

    return (
        <aside className={`${styles.sidebar} ${retro.chiseled} ${collapsed ? styles.collapsed : ""}`}>
            <SidebarHeader 
                logo={logo} 
                companyName={companyName} 
                collapsed={collapsed}
            />
            <SidebarTrigger onClick={() => setCollapsed(!collapsed)}/>
            <SidebarMenu title="Main Menu" links={links} collapsed={collapsed}/>
            <SidebarFooter imageSrc={imageSrc} name={name} email={email} collapsed={collapsed}/>
        </aside>
    );
};
