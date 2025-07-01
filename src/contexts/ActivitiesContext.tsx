import { createContext, useContext, useState, useEffect } from "react";
import { Activity } from "../types/ActiveType";
import { ActivityContextProps } from "../interfaces/ActivityContextProps";



const ActivityContext = createContext<ActivityContextProps | undefined>(undefined);

export const ActivitiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activity, setActivity] = useState<Activity | null>(null);


  useEffect(() => {
    fetch("http://localhost:3333/activity/")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.error("error on get the activities", error);
      });
  }, []);

  return (
    <ActivityContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivities = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivities must be used inside <ActivitiesProvider>");
  }
  return context;
};
