import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { Biohazard, Briefcase, Mail, ShieldAlert } from "lucide-react";
import "./globals.css";
import styles from "./layout.module.css";
import { Sidebar } from "./components/ui/sidebar/Sidebar";

const vt323 = VT323({
  variable: "--vt323",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `Umbrella "Rodem" v5.1`,
  description: "The future of biotechnology",
};

const navLinks = [
  { label: "Bioweapons", href: "/products", icon: <Biohazard /> },
  { label: "Priority Threats", href: "/priority-threats", icon: <ShieldAlert /> },
  { label: "Assets", href: "/services", icon: <Briefcase /> },
  { label: "Contact", href: "/contact", icon: <Mail /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vt323.variable}`}>
        <body>
          <div className={styles.container}>
            <Sidebar
              logo="/logo.png"
              imageSrc="/chippy.jpg"
              name="Joab Felton"
              email="jfelton@umbrella.com"
              links={navLinks}
            />
            <main className={styles.main}>{children}</main>
          </div>
        </body>
    </html>
  );
}
