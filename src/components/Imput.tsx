import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  Pressable,
  Text
} from "react-native";
import Navigator from "./navegator";
import send from '../../images/elements.png'
import { useState } from "react";
import { handleChat } from "../utils/handleChat";



export default function BaseChat(){

    const [chat,setChat] = useState("")
 return(
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
                 placeholder="oque tem na sua mente ?"
                 className="flex-1 p-4"
            />
            <Pressable onPress={async () => {await handleChat(chat) , setChat("")}} >
              <Image   source={send} className="h-[19px] w-[19px]"/>
            </Pressable>
            
            </View>
          </View>
        </KeyboardAvoidingView>

        <View className="absolute left-0 right-0 bottom-0 h-16">
          <Navigator />
        </View>
      </View>
   
 )

}