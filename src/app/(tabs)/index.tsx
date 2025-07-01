import fitnessLogo from "../../../images/Logo.png";
import { View, Image, TextInput, Text, Pressable, Alert } from "react-native";
import "../../../global.css";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SuccessModal } from "@/src/components/sucessModal";
import { useAuth } from "@/src/contexts/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const { signin } = useAuth();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3333/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao criar conta");
      }

      if (data?.acess_token) {
        await signin(data.acess_token);
        setSuccessModalVisible(true);
      } else {
        throw new Error("Nenhum token retornado");
      }

    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        Alert.alert("Erro", err.message);
      } else {
        Alert.alert("Erro", "Erro desconhecido");
      }
    }
  };

  return (
    <View className="flex items-center h-screen w-screen bg-white py-5 px-8 justify-center gap-4">
      <Image source={fitnessLogo} className="w-[226px] h-[226px]" />
      <Text className="text-3xl font-bold text-black">Crie sua conta</Text>
      <View className="w-[265px]">
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="E-MAIL"
          className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Senha"
          className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"
        />
        <TextInput
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
          placeholder="Confirmar Senha"
          className="border-b-2 border-gray-300 mb-6 font-exo mt-1 placeholder:text-gray-400 placeholder:text-xl"
        />

        <Pressable onPress={handleRegister} className="bg-black mb-2 p-2 rounded">
          <Text className="text-white text-center font-bold">Criar conta</Text>
        </Pressable>

        <Text className="font-extralight gap-5 text-sm flex-row">
          Já possui conta?
          <Link href={"/(tabs)/login"}>
            <Text className="text-blue-500"> Fazer login </Text>
          </Link>
        </Text>

        <SuccessModal
          visible={successModalVisible}
          onClose={() => {
            setSuccessModalVisible(false);
            router.push("/home");
          }}
        />
      </View>
    </View>
  );
}
