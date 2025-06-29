import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Chat() {
  return (
    <NavigationProvider>
      <View className="flex-1 bg-gray-100">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1">
            </View>
          </TouchableWithoutFeedback>

          <View className="absolute left-0 right-0 bottom-16 px-4">
            <TextInput
              placeholder="Type here..."
              className="border border-gray-400 p-4 rounded bg-white"
            />
          </View>
        </KeyboardAvoidingView>

        <View className="absolute left-0 right-0 bottom-0 h-16">
          <Navigator />
        </View>
      </View>
    </NavigationProvider>
  );
}
