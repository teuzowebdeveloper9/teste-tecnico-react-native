// src/contexts/AuthContext.tsx

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { AuthContextProps } from "../interfaces/AuthContextProps";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const savedToken = await AsyncStorage.getItem("access_token");
      if (savedToken) {
        setToken(savedToken);
      }
    };
    loadToken();
  }, []);

  const signin = async (newToken: string) => {
    await AsyncStorage.setItem("access_token", newToken);
    setToken(newToken);
    router.replace("/(tabs)/home"); 
  };

  const signout = async () => {
    await AsyncStorage.removeItem("access_token");
    setToken(null);
    router.replace("/(tabs)/login"); 
  };

  return (
    <AuthContext.Provider value={{ token, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
};
