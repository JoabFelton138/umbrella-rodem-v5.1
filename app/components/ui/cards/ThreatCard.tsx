import { PriorityThreat, StatusValue, ThreatValue } from "@/app/types/priority-threat";
import { Avatar } from "../avatar/Avatar";
import { Pill } from "../pill/Pill";

import styles from "./Card.module.css";
import { CardShell } from "../../CardGrid/CardShell";

export const ThreatCard = ({ name, status, affiliation, threatLevel, lastKnownLocation, summary, avatar }: PriorityThreat) => {

    return (
        <CardShell>
                <div className={styles.cardHeader}>
                    <Avatar 
                        imageSrc={avatar} 
                        alt={name} 
                        width={100} 
                        height={100} 
                    />
                    <h3>{name.toUpperCase()}</h3>
                </div>
                <div className={styles.cardChipContainer}>
                    <p>STATUS: <Pill type="status" value={status} /></p>
                    <p>THREAT: <Pill type="threat" value={threatLevel} /></p>
                </div>
                <div className={styles.cardBody}>
                    <p>AFFILIATION: {affiliation}</p>
                    <p>LAST KNOWN LOCATION: {lastKnownLocation}</p>
                </div>
                <section className={styles.summary}>
                    <h4>SUMMARY</h4>
                    <p>{summary}</p>
                </section>
        </CardShell>
    );
};