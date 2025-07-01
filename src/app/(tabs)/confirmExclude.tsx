import { View, Text, Image, Pressable } from "react-native";
import { Link, router } from "expo-router";
import exclude from "@/images/exclude.png";
import { useActivities } from "@/src/contexts/ActivitiesContext";
import { handleDeleteActivity } from "@/src/utils/handleDeleteActivity";

export default function ConfirmExclude() {
  const { activity } = useActivities();

  return (
    <View className="flex-1 justify-center items-center bg-black/50">
      <View className="bg-white w-[90%] p-4 rounded-md">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold text-black">
            Excluir atividade
          </Text>
          <Link href={"/(tabs)/home"}>
            <Text className="text-xl font-bold text-gray-500">×</Text>
          </Link>
        </View>

        <Text className="text-gray-600 mb-4">
          Deseja apagar a <Text className="font-semibold">{activity?.title}</Text>?
          Confirme no botão abaixo para concluir a exclusão da atividade!
        </Text>

        <View className="flex-row justify-between">
          <Link href={"/(tabs)/home"}>
            <View className="border border-gray-400 px-4 py-2 rounded">
              <Text className="text-gray-600">Cancelar</Text>
            </View>
          </Link>

          <Pressable
            className="flex-row items-center bg-red-800 px-4 py-2 rounded"
            onPress={async () => {
              if (!activity?.id) return;

              await handleDeleteActivity(activity.id);
              router.push("/(tabs)/home");
            }}
          >
            <Text className="text-white mr-2">Excluir atividade</Text>
            <Image source={exclude} className="h-[16px] w-[16px]" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
