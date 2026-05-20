import { CardShell } from "../../card-grid/CardShell";
import styles from "./Card.module.css";
import { Avatar } from "../avatar/Avatar";
import { Pill } from "../pill/Pill";
import { Bioweapon } from "@/app/types/bioweapons";


export const BioweaponsCard = ({ name, status, classification, price, avatar, description, abilities }: Bioweapon) => {

    const abilitiesList = abilities.join(", ");
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
                    <p>PRICE: ${price}</p>
                </div>
                <div className={styles.cardBody}>
                    <p>ABILITIES: {abilitiesList}</p>
                    <p>CLASSIFICATION: {classification}</p>
                </div>
                <section className={styles.summary}>
                    <h4>DESCRIPTION</h4>
                    <p>{description}</p>
                </section>
        </CardShell>
    );
};