import { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import { useActivities } from "@/src/contexts/ActivitiesContext";
import { handleUpdateActivity } from "../utils/handleUpdateActivity";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
import closeModalActivity from '@/images/closeModalActivity.png'


export default function FormUpdateActivity(){

    const {activity} = useActivities()
     const [visible,setVisible] = useState(true)
     const [itensidade,setIntensidade] = useState("")    
     const [duracao,setDuracao] = useState(0)
     const [nameActivity, setNameActivity] = useState("");

   return(
    
  <Modal
      transparent
      visible={visible}
      animationType="fade"
     >
    <View className="flex-1 bg-black/50 justify-center items-center">
      <View className="w-[90%] bg-white absolute bottom-0 p-4 rounded-md">
        <View className='justify-between items-center flex-row'>
            <Text className="font-semibold text-xl text-black">edite sua atividade</Text>
             <Link href={"/(tabs)/home"}>
              <Pressable onPress={() => setVisible(false)}>
                <Image source={closeModalActivity} className='h-[19px]'/>     
              </Pressable>
             </Link>
          </View>
            <Text className='font-semibold'>nome</Text>
          <TextInput
  className='rounded-sm p-2 border border-black'
  placeholder={activity?.title}
  value={nameActivity}
  onChangeText={setNameActivity}
/>
          <Text className='font-semibold'>Duração</Text>
             <Picker
        selectedValue={duracao}
        onValueChange={(itemValue) => setDuracao(itemValue)}
        style={{ height: 50, width: 350 }}
      >
        <Picker.Item label="10 minutos" value={10} />
        <Picker.Item label="20 minutos" value={20} />
        <Picker.Item label="30 minutos" value={30} />
        <Picker.Item label="40 minutos" value={40} />
        <Picker.Item label="50 minutos" value={50} />
        <Picker.Item label="60 minutos" value={60} />
        <Picker.Item label="70 minutos" value={70} />
        <Picker.Item label="80 minutos" value={80} />
        <Picker.Item label="90 minutos" value={90} />
        <Picker.Item label="100 minutos" value={100} />
        <Picker.Item label="110 minutos" value={110} />
        <Picker.Item label="120 minutos" value={120} />
        <Picker.Item label="130 minutos" value={130} />
        <Picker.Item label="140 minutos" value={140} />
        <Picker.Item label="150 minutos" value={150} />
        <Picker.Item label="160 minutos" value={160} />
        <Picker.Item label="170 minutos" value={170} />
        <Picker.Item label="180 minutos" value={180} />
        <Picker.Item label="190 minutos" value={190} />
        <Picker.Item label="200 minutos" value={200} />
        <Picker.Item label="210 minutos" value={210} />
        <Picker.Item label="220 minutos" value={220} />
        <Picker.Item label="230 minutos" value={230} />
        <Picker.Item label="240 minutos" value={240} />
        <Picker.Item label="250 minutos" value={250} />
        <Picker.Item label="260 minutos" value={260} />
        <Picker.Item label="270 minutos" value={270} />
        <Picker.Item label="280 minutos" value={280} />
        <Picker.Item label="290 minutos" value={290} />
        <Picker.Item label="300 minutos" value={300} />
        <Picker.Item label="310 minutos" value={310} />
        <Picker.Item label="320 minutos" value={320} />

      </Picker> 
      <Text className='font-semibold'>Intensidade</Text>
      <Picker
        selectedValue={itensidade}
        onValueChange={(itemValue) => setIntensidade(itemValue)}
        style={{ height: 50, width: 350 }}
      >
        <Picker.Item label="Leve" value="leve" />
        <Picker.Item label="Média" value="media" />
        <Picker.Item label="Pesada" value="pesada" />
      </Picker>
      <Link href={"/(tabs)/home"}>

      <Pressable
  className="mt-4 bg-black py-2 rounded-md"
  onPress={async () => {
    if (!activity?.id) return; 

    await handleUpdateActivity(activity.id, {
      nameActivity: nameActivity,
      itensity: itensidade,
      durationInMinutes: duracao,
    });
    setVisible(false);
  }}
>
  <Text className="text-white text-center">Salvar alterações</Text>
</Pressable>
      </Link>   
        
        </View>
      </View>
     </Modal>

   )  
}