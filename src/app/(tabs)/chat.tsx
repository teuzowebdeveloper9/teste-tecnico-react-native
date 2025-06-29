import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  Pressable
} from "react-native";
import send from '../../../images/elements.png'
import { handleChat } from "@/src/utils/handleChat";
import { useState } from "react";

export default function Chat() {

  const [chat, setChat] = useState("")
  return (
    <NavigationProvider>
      <View className="flex-1  bg-gray-100">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1">
            </View>
          </TouchableWithoutFeedback>
           
          <View className="flex-1 justify-end pb-32 px-5">
            <View className="flex-row items-center border border-white rounded-sm bg-gray-300 px-3">
              <TextInput
                 value={chat}
                 onChangeText={setChat}
                 placeholder="Type here..."
                 className="flex-1 p-4"
            />
            <Pressable onPress={() => handleChat(chat)}>
              <Image  source={send} className="h-[19px] w-[19px]"/>
            </Pressable>
            
            </View>
          </View>
        </KeyboardAvoidingView>

        <View className="absolute left-0 right-0 bottom-0 h-16">
          <Navigator />
        </View>
      </View>
    </NavigationProvider>
  );
}
