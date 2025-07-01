import HomeHeader from '@/src/components/HomeHeader'
import { View, Text, ScrollView, Pressable,Modal,Image, TextInput } from 'react-native'
import RegisterComponent from "@/src/components/registerComponent";
import { useActivities } from '@/src/contexts/ActivitiesContext'
import Navigator from '@/src/components/navegator';
import { NavigationProvider } from '@/src/contexts/NavigationContext';
import { useState } from 'react';
import closeModalActivity from '../../../images/closeModalActivity.png'
import { Picker } from '@react-native-picker/picker';
import { HandleCreateActivity } from '@/src/utils/handleCreateActivity';
import GenericActivitys from '@/src/components/GenericActivitys';


export default function RegisterActivity() {
  const { activities } = useActivities();
  const [visible,setVisible] = useState(true)
  const [itensidade,setIntensidade] = useState("")    
  const [nameActivity,setNameActivity] = useState("")
  const [duracao,setDuracao] = useState(0)

  

  return (
    <NavigationProvider>
        <GenericActivitys />
            <Pressable onPress={() => setVisible(true)} className="w-full bg-black rounded-sm h-[30px]  flex items-center justify-center">
              <Text className="text-white font-semibold">Registrar Atividade</Text>
            </Pressable>
              <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-[90%] bg-white absolute bottom-0 p-4 rounded-md">
          <View className='justify-between items-center flex-row'>
           <Text className="text-lg font-bold mb-4">Edite sua atividade</Text>
           <Pressable onPress={() => setVisible(false)}>
             <Image source={closeModalActivity} className='h-[19px]'/>     
           </Pressable>
          </View>
           <Text className='font-semibold'>nome</Text>
         <TextInput
          className='rounded-sm p-2 border border-black'
          placeholder='nome da atividade...'
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
        

         <Pressable
  className="mt-4 bg-black py-2 rounded-md"
  onPress={async () => {
    await HandleCreateActivity({
      nameActivity: nameActivity,
      itensity: itensidade,
      durationInMinutes: duracao,
    });
    setVisible(false);
  }}
>
  <Text className="text-white text-center">Registrar atividade</Text>
</Pressable>
        </View>
      </View>
    </Modal>
    </NavigationProvider>
  );
}
