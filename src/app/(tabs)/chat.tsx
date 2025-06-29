import { NavigationProvider } from "@/src/contexts/NavigationContext";
import { View, ScrollView, Text } from "react-native";
import BaseChat from "@/src/app/(tabs)/Imput";
import HeaderChat from "@/src/components/HeaderChat";
import { ChatProvider, useChatContext } from "@/src/contexts/ChatContext";

export default function Chat() {

     const { messages } = useChatContext();


  return (
    

   
    <NavigationProvider>
      <HeaderChat />
      <View className="flex h-[585px] md:h-[785px]">
          <ScrollView
        className="space-y-3 w-screen bg-gray-100"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {messages.map((m, i) => (
        <View
          key={i}
          className={`max-w-[70%] px-4 py-2 my-2 rounded-lg ${
            m.role === "user" ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
          }`}
        >
          <Text>{m.content}</Text>
        </View>
      ))}
      </ScrollView>

      </View>
     
      <BaseChat />
    </NavigationProvider>
    
  );
}
