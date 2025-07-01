import { Activity } from "../types/ActiveType";

export interface ActivityContextProps {
  activities: Activity[];
  setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
}