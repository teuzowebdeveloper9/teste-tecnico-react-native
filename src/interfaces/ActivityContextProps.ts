import { Activity } from "../types/ActiveType";

export interface ActivityContextProps {
  activity: Activity | null;
  activities: Activity[];
  setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
  setActivity: React.Dispatch<React.SetStateAction<Activity | null>>;
  getActivityById: (id: string) => Promise<void>;
}