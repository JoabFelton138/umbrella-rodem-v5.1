export type StatusValue = "alive" | "deceased" | "unknown" | "available" | "destroyed" | "contained" | "out_of_stock";
export type ThreatValue = "low" | "moderate" | "high" | "critical";

export type PillProps =
  | { type: "status"; value: StatusValue }
  | { type: "threat"; value: ThreatValue };