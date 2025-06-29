import fitnessLogo from "../../../images/Logo.png"
import { View, Image , TextInput, Text, Pressable, Modal} from "react-native";
import '../../../global.css'
import { Link, router } from "expo-router";
import { useState } from "react";
import { handleRegister } from "@/src/utils/handleRegister";
import { SuccessModal } from "@/src/components/sucessModal";


export default function Login(){

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPasswors] = useState("")
   const [successModalVisible, setSuccessModalVisible] = useState(false);

   
  return(
     <View className="flex items-centerh-screen w-screen bg-white  py-5 px-8 justify-center gap-4">
     <Image source={fitnessLogo} className="w-[226px] h-[226px]"/> 
     <Text className="text-3xl font-bold  text-black">
         Crie sua conta
     </Text>
     <View className="w-[265px] h-[290px]">
        <TextInput onChangeText={setEmail}  value={email} placeholder="E-MAIL" className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"/>
        <TextInput onChangeText={setPassword} value={password} placeholder="Senha" className="border-b-2 border-gray-300 font-exo  mb-6 placeholder:text-gray-400 placeholder:text-xl" />
        <TextInput onChangeText={setConfirmPasswors} value={confirmPassword} placeholder="confirmar Senha" className="border-b-2 border-gray-300 mb-6 font-exo mt-1 placeholder:text-gray-400 placeholder:text-xl" />
          
            <Pressable  onPress={() => handleRegister({email,password,confirmPassword})} className="bg-black mb-2 p-2 rounded">
               <Text className="text-white text-center font-bold">criar conta</Text>
            </Pressable>
          
            <Text className="font-extralight gap-5 text-sm flex-row">
              ja possui conta ?
              <Link href={'/(tabs)/login'}>
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
  )
  
}