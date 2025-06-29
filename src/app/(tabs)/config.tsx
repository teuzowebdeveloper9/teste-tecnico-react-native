import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import { View,Text } from "react-native";

export default function Config(){
 return(
  <NavigationProvider>
    <View className="bg-black h-screen w-screen">
      <Text>
      esta na config 
      </Text>
    <Navigator />
  </View>
  </NavigationProvider>
  
 )

}