import fitnessLogo from "../../../images/Logo.png";
import { View, Image, TextInput, Text, Pressable, Alert } from "react-native";
import "../../../global.css";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SuccessModal } from "@/src/components/sucessModal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);


  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3333/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

     

    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        Alert.alert("Error", err.message);
      } else {
        Alert.alert("Error", "Unknown error");
      }
    }
  };

  return (
    <View className="flex items-center h-screen w-screen bg-white py-5 px-8 justify-center gap-4">
      <Image source={fitnessLogo} className="w-[226px] h-[226px]" />
      <Text className="text-3xl font-bold text-black">Login</Text>
      <View className="w-[265px] h-[290px]">
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-MAIL"
          className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
          className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"
        />
        <Pressable onPress={handleLogin} className="bg-black p-2 rounded">
          <Text className="text-white text-center font-bold">Login</Text>
        </Pressable>
        <Text className="text-white font-thin">criar conta</Text>
        <Text className="font-extralight gap-5 text-sm flex-row">
          não possui conta ?
          <Link href={"/"}>
            <Text className="text-blue-500"> criar conta </Text>
          </Link>
        </Text>
      </View>
      <SuccessModal
        visible={successModalVisible}
        onClose={() => {
          setSuccessModalVisible(false);
          router.push("/home");
        }}
      />
    </View>
  );
}
