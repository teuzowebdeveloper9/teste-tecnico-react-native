import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import { View,Text } from "react-native";

export default function Home (){
  return(
    <NavigationProvider>
        <View className="h-screen w-screen bg-white">
          <Navigator />
         </View>
    </NavigationProvider>
   
  )
 
}