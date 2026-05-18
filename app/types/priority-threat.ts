import { StatusValue, ThreatValue } from "./pills";

export interface PriorityThreat {
    id: number;
    name: string;
    status: StatusValue;
    affiliation: string;
    threatLevel: ThreatValue;
    lastKnownLocation: string;
    summary: string;
    avatar: string;
}