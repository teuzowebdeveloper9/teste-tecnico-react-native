import AsyncStorage from "@react-native-async-storage/async-storage";
import { RegisterProps } from "../interfaces/RegisterProps";
import { Alert } from "react-native";

export async function handleRegister({email,password,confirmPassword}: RegisterProps){
  
  try {
    const response = await fetch("http://localhost:3333/auth/signup", {
      method : "POST",
      headers:  {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        email,
        password,
        confirmPassword
      })
    });
     if (!response.ok) {
        throw new Error("Invalid credentials or bad request");
      }

      const data = await response.json()
      console.log(data.acess_token)
      await AsyncStorage.setItem("token",data.acess_token)
  }catch(err){
      console.error(err);
           if (err instanceof Error) {
             Alert.alert("Error", err.message);
           } else {
             Alert.alert("Error", "unknown error");
           }
  }
}