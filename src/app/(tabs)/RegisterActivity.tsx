// src/app/(tabs)/RegisterActivity.tsx

import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import GenericActivitys from "@/src/components/GenericActivitys";
import RegisterActivityModal from "@/src/components/FormToCreateActivity";

export default function RegisterActivity() {
  const [visible, setVisible] = useState(true);

  return (
    <View className="flex-1 p-4">
      <GenericActivitys />

      <Pressable
        onPress={() => setVisible(true)}
        className="w-full bg-black rounded-sm h-[40px] flex items-center justify-center mt-4"
      >
        <Text className="text-white font-semibold">Registrar Atividade</Text>
      </Pressable>

      <RegisterActivityModal visible={visible} setVisible={setVisible} />
    </View>
  );
}
