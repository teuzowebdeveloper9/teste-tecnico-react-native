import { NavigationProvider } from "@/src/contexts/NavigationContext";
import {View} from "react-native";

import BaseChat from "@/src/components/Imput";

export default function Chat() {

  
  return (

    <NavigationProvider>
      

      <View className="space-y-3">

      </View>
     <BaseChat />
    </NavigationProvider>
  );
}
