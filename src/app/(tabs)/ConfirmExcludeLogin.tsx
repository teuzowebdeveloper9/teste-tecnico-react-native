import { useState } from "react";
import { handleDeleteActivity } from "@/src/utils/handleDeleteActivity";
import { Link } from "expo-router";
import { Text, Pressable, TextInput, View } from "react-native";

export default function ConfirmExcludeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <View className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <Text className="text-lg font-bold mb-2">Excluir conta</Text>
        <Text className="text-gray-600 mb-4">
          Para confirmar a exclusão da sua conta, confirme seu nome de usuário e sua senha abaixo.
        </Text>

        <TextInput
          placeholder="Nome de usuário"
          className="border-b border-gray-400 mb-4 p-2"
          value={email}}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Confirmar senha"
          secureTextEntry
          className="border-b border-gray-400 mb-6 p-2"
          value={password}
          onChangeText={setPassword}
        />

        <View className="flex-row justify-between">
          <Pressable className="px-4 py-2 border border-gray-400 rounded">
            <Text className="text-gray-600">Cancelar</Text>
          </Pressable>
          <Pressable
             onPress={() => handleDeleteActivity({email,password}) }
            className="px-4 py-2 bg-red-800 rounded flex-row items-center"
          >
            <Text className="text-white mr-2">Excluir conta</Text>
            <Text className="text-white">🗑️</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
