export type StatusValue = "alive" | "deceased" | "unknown";
export type ThreatValue = "low" | "moderate" | "high" | "critical";

export type PillProps =
  | { type: "status"; value: StatusValue }
  | { type: "threat"; value: ThreatValue };


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