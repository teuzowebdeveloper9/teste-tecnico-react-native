import { Modal, Text, View,Image, Pressable, TextInput } from "react-native"
import { useActivities } from "@/src/contexts/ActivitiesContext"
import GenericActivitys from "@/src/components/GenericActivitys"
import { useState } from "react"
import { Link } from "expo-router"
import closeModalActivity from '@/images/closeModalActivity.png'
import Navigator from "@/src/components/navegator"
import { NavigationProvider } from "@/src/contexts/NavigationContext"

export default function EditActicity(){
  
  const {activity} = useActivities()
  const [visible,setVisible] = useState(true)
  const [itensidade,setIntensidade] = useState("")    
  const [nameActivity,setNameActivity] = useState("")
  const [duracao,setDuracao] = useState(0)

  return(
   <View className="p-4">
      <GenericActivitys />
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
              onChangeText={setNameActivity}
             />
             
        </View>
      </View>
     </Modal>
   </View> 

  )
}