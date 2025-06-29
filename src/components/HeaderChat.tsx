import { View, Image, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import editIcon from "../../images/editIcon.png";
import complete from "../../images/complete.png";
import arrow from "../../images/square-arrow-left-02-sharp.png";
import ex from "../../images/ex.png"; // o X quando editando

export default function HeaderChat() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("primeiro chat");

  return (
    <View className="flex flex-row items-center justify-center py-5 px-8 gap-4 w-[342px] h-[62px] mt-2">
      <Pressable onPress={() => setIsEditing(false)}>
         <Image source={isEditing ? ex : arrow} />
      </Pressable>

      {isEditing ? (
        <TextInput
          className="flex-1 w-1/5 items-center  bg-gray-200 text-black font-bold text-3xl text-center"
          value={text}
          onChangeText={setText}
        />
      ) : (
        <Text className="font-bold text-3xl">{text}</Text>
      )}

      <Pressable onPress={() => setIsEditing(!isEditing)}>
        <Image source={isEditing ? complete : editIcon} />
      </Pressable>
    </View>
  );
}
