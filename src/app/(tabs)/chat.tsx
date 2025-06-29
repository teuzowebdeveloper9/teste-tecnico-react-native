import { NavigationProvider } from "@/src/contexts/NavigationContext";
import { View, ScrollView, Text } from "react-native";
import BaseChat from "@/src/components/Imput";
import HeaderChat from "@/src/components/HeaderChat";

export default function Chat() {



  return (
    <NavigationProvider>
      <HeaderChat />

      <ScrollView
        className="space-y-3 w-screen bg-gray-100"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
      
<View className="max-w-[350px] m-4 px-4 py-3 bg-gray-100 rounded-lg self-start">
  <Text className="text-black font-normal">oi</Text>
</View>


<View className="max-w-[350px] m-4 px-4 py-3 bg-gray-200 rounded-lg self-end">
  <Text className="text-black font-normal">oi</Text>
</View>
      </ScrollView>

      <BaseChat />
    </NavigationProvider>
  );
}
