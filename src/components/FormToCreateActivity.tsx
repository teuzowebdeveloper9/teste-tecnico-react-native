// src/components/RegisterActivityModal.tsx

import { Modal, View, Text, Pressable, Image, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { HandleCreateActivity } from "@/src/utils/handleCreateActivity";
import closeModalActivity from "@/images/closeModalActivity.png";
import { useState } from "react";
import { RegisterActivityModalProps } from "../interfaces/RegisterActivityProps";
import { Link, router } from "expo-router";


export default function RegisterActivityModal({ visible, setVisible }: RegisterActivityModalProps) {
  const [itensidade, setIntensidade] = useState("");
  const [nameActivity, setNameActivity] = useState("");
  const [duracao, setDuracao] = useState(0);

  const handleSubmit = async () => {
    await HandleCreateActivity({
      nameActivity,
      itensity: itensidade,
      durationInMinutes: duracao,
    });
    setVisible(false);
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-[90%] bg-white absolute bottom-0 p-4 rounded-md">
          <View className="justify-between items-center flex-row">
            <Text className="text-lg font-bold mb-4">Registrar sua atividade</Text>
            <Pressable onPress={() => setVisible(false)}>
              <Link href={"/(tabs)/home"}>
                  <Image source={closeModalActivity} className="h-[19px]" />

              </Link>
            </Pressable>
          </View>

          <Text className="font-semibold">Nome</Text>
          <TextInput
            className="rounded-sm p-2 border border-black"
            placeholder="nome da atividade..."
            value={nameActivity}
            onChangeText={setNameActivity}
          />

          <Text className="font-semibold">Duração</Text>
          <Picker
            selectedValue={duracao}
            onValueChange={setDuracao}
            style={{ height: 50, width: 350 }}
          >
            {Array.from({ length: 32 }, (_, i) => (
              <Picker.Item key={i} label={`${(i + 1) * 10} minutos`} value={(i + 1) * 10} />
            ))}
          </Picker>

          <Text className="font-semibold">Intensidade</Text>
        <Picker
            selectedValue={itensidade}
            onValueChange={setIntensidade}
            style={{ height: 50, width: 350 }}
>
           <Picker.Item label="Selecione a intensidade..." value="" enabled={false} />
           <Picker.Item label="Leve" value="leve" />
           <Picker.Item label="Média" value="media" />
           <Picker.Item label="Pesada" value="pesada" />
        </Picker>  


          <Pressable
            className="mt-4 bg-black py-2 rounded-md"
             onPress={async () => {
  await handleSubmit();
  router.push("/(tabs)/home");
}}>
            <Text className="text-white text-center">Registrar atividade</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
