import { CardGrid } from "../components/card-grid/CardGrid"
import { Bioweapon } from "../types/bioweapons";
import { bioweapons } from "../data/bioweapons.json";
import { BioweaponsCard } from "../components/ui/cards/BioweaponsCard";

export default function Bioweapons () {
    const bioweaponsData = bioweapons as Bioweapon[];
    return (
        <CardGrid>
            {bioweaponsData.map(b => <BioweaponsCard key={b.id} {...b} />)}
        </CardGrid>
    );
};