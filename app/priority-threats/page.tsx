import { CardGrid } from "../components/CardGrid/CardGrid";
import { priorityThreats } from "../data/priority-threats.json";
import { ThreatCard } from "../components/ui/cards/ThreatCard";
import { PriorityThreat } from "../types/priority-threat";

export default function PriorityThreats() {

    const threats = priorityThreats as PriorityThreat[];

    return (
        <CardGrid>
            {threats.map(t => <ThreatCard key={t.id} {...t} />)}
        </CardGrid>
    );
};