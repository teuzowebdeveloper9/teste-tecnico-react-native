import fitnessLogo from "../../../images/Logo.png"
import { View, Image , TextInput, Text, Pressable} from "react-native";
import '../../../global.css'
import { Link } from "expo-router";

export default function Login(){

  return(
     <View className="flex items-centerh-screen w-screen bg-white  py-5 px-8 justify-center gap-4">
     <Image source={fitnessLogo} className="w-[226px] h-[226px]"/> 
     <Text className="text-3xl font-bold  text-black">
         Login
     </Text>
     <View className="w-[265px] h-[290px]">
        <TextInput placeholder="E-MAIL" className="border-b-2 border-gray-300 font-exo mb-6 placeholder:text-gray-400 placeholder:text-xl"/>
        <TextInput placeholder="Senha" className="border-b-2 border-gray-300 font-exo  mb-6 placeholder:text-gray-400 placeholder:text-xl" />
        <Text className="text-white font-extralight">criar conta</Text>
         <Text className="font-extralight gap-5 text-sm flex-row">
             não possui conta ?
             <Link href={'/'}>
          <Text className="text-blue-500"> criar conta </Text>
           </Link>
        </Text>
     </View>
    </View>
  )
  
}