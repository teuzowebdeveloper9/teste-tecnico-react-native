import { View, Text, Image } from 'react-native';
import miniLogo from '../../images/logo-mini.png'; 

export default function HomeHeader() {
  return (
    <View className="w-full h- bg-white p-8 ">
      <View className="flex-col">
        <View className="flex-row items-center space-x-2">
          <Image source={miniLogo} className="w-[60px] h-[60px] mr-10" />
          <Text className="text-2xl font-bold">Início</Text>
        </View>
        <Text className="text-xl font-semibold mt-2">Suas atividades</Text>
      </View>
    </View>
  );
}
