import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProps {
  token: string | null;
  email: string | null;  
  signin: (token: string, email: string) => Promise<void>;
  signout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const savedToken = await AsyncStorage.getItem("access_token");
      const savedEmail = await AsyncStorage.getItem("user_email");
      if (savedToken) {
        setToken(savedToken);
      }
      if (savedEmail) {
        setEmail(savedEmail);
      }
    };
    loadToken();
  }, []);

  const signin = async (newToken: string, userEmail: string) => {
    await AsyncStorage.setItem("access_token", newToken);
    await AsyncStorage.setItem("user_email", userEmail);
    setToken(newToken);
    setEmail(userEmail);
    router.replace("/(tabs)/home");
  };

  const signout = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("user_email");
    setToken(null);
    setEmail(null);
    router.replace("/(tabs)/login");
  };

  return (
    <AuthContext.Provider value={{ token, email, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
