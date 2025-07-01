import { Alert } from "react-native";
import { CreateActivityProps } from "../interfaces/createActivityProps";

export const HandleCreateActivity = async ({durationInMinutes,itensity,nameActivity} : CreateActivityProps) => {
    if(nameActivity === "" ||   itensity === "" ||  durationInMinutes === 0){
      return;
    }
    try {
    const response = await fetch("http://localhost:3333/activity/", {
      method : "POST",
      headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
     title: nameActivity,       
     durationInMinutes: Number(durationInMinutes), 
  intensity: itensity
   })
        
    })

     if (!response.ok) {
        throw new Error("Invalid credentials or bad request");
      }

      const data = await response.json();
    }catch(err){
       console.error(err)
    if (err instanceof Error) {
               Alert.alert("Error", err.message);
    } else {
               Alert.alert("Error", "unknown error");
         }
    }
  }