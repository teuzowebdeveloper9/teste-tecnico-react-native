import fitnessLogo from "../../../images/Logo.png";
import { View, Image, TextInput, Text, Pressable, Alert, Modal } from "react-native";
import "../../../global.css";
import { Link, router } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import check from "../../../images/check.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const hadleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3333/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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

  return (
    <View className="flex items-centerh-screen w-screen bg-white py-5 px-8 justify-center gap-4">
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
          className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"
        />
        <Pressable onPress={hadleLogin} className="bg-black p-2 rounded">
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => {
          setSuccessModalVisible(false);
          router.push("/");
        }}
      >
        <Pressable
          className="flex-1 items-center justify-center bg-black/50"
          onPress={() => {
            setSuccessModalVisible(false);
            router.push("/");
          }}
        >
          <Pressable
            className="w-[310px] h-[125px] bg-green-100 rounded-lg items-center justify-center"
            onPress={(e) => e.stopPropagation()}
          >
            <Image source={check} className="w-12 h-12 mb-2" />
            <Text className="text-green-800 font-bold text-center">
              Conta registrada com sucesso!
            </Text>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
