import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginProps } from "../interfaces/loginProps";
import { Alert } from "react-native";

export const hadleLogin = async ({email ,password}: loginProps) => {
    try {
      const response = await fetch("http://localhost:3333/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
         email,
         password}),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or bad request");
      }
      

      const data = await response.json();
      await AsyncStorage.setItem("token", data.acess_token);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        Alert.alert("Error", err.message);
      } else {
        Alert.alert("Error", "unknown error");
      }
    }
  };