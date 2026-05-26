import type { Metadata } from "next";
import { VT323, IBM_Plex_Serif } from "next/font/google";
import { Biohazard, Briefcase, Dna, HomeIcon, Mail, ShieldAlert } from "lucide-react";
import "./globals.css";
import styles from "./layout.module.css";
import { Sidebar } from "./components/ui/sidebar/Sidebar";
import { Menu } from "./components/ui/menu/Menu";

const vt323 = VT323({
  variable: "--vt323",
  subsets: ["latin"],
  weight: ["400"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `Umbrella "Rodem" v5.1`,
  description: "The future of biotechnology",
};

const navLinks = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "Bioweapons", href: "/bioweapons", icon: <Biohazard /> },
  { label: "Priority Threats", href: "/priority-threats", icon: <ShieldAlert /> },
  { label: "Assets", href: "/services", icon: <Briefcase /> },
  { label: "Facilities", href: "/facilities", icon: <Dna /> },
  { label: "Contact", href: "https://github.com/JoabFelton138", icon: <Mail /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSerif.variable}`}>
        <body>
          <div className={styles.container}>
            {/* <Sidebar
              logo="/logo.png"
              imageSrc="/chippy.jpg"
              name="Joab Felton"
              email="jfelton@umbrella.com"
              links={navLinks}
            /> */}
            <Menu
              logo="/logo.png"
              links={navLinks}
            />
            <main className={styles.main}>{children}</main>
          </div>
        </body>
    </html>
  );
}
