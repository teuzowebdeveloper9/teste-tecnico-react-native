import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import { View, Image, Text } from "react-native";
import configImage from '@/images/configImage.png';
import EditiconConfig from '@/images/editConfigName.png';
import deleteAcount from '@/images/delete-config-acount.png'
import exitAcount from "@/images/exitAcount.png"
import { useContext } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";
import { Link } from "expo-router";


export default function Config() {
   const authContext = useContext(AuthContext)

    if (!authContext) {
    // Você pode renderizar um indicador de carregamento ou um erro aqui
    return (
      <View className="flex-col justify-center items-center h-screen w-screen">
        <Text>Carregando configurações...</Text>
      </View>
    );
  }

  const { email, signout } = authContext;

  const handleSignOut = async () => {
    await signout();
  }; 


  return (
    <NavigationProvider>
      <View className="flex-col justify-center items-center gap-4 p-4 h-screen w-screen">
        <View>
          <Image
            className="h-[152px] w-[152px] flex items-center justify-center"
            source={configImage}
          />
        </View>

        <View className="flex-row justify-between items-center w-full px-4">
          <Text>nome : mateus</Text>
          <Image source={EditiconConfig} />
        </View>

        <View className="flex-row justify-between items-center w-full px-4">
          <Text>email : mateussoftwaredeveloper@gmail.com</Text>
          <Image source={EditiconConfig} />
        </View>
        <View className="w-full px-4">
          <Text className="text-xl font-bold text-left">ações</Text>
        </View>
        <View className="h-[120px] w-[342px] flex-col gap-4">
          <Link href={"/(tabs)/login"}>
              <Text className="text-xl text-red-700 justify-center flex-row items-center"><Image source={deleteAcount} className="h-[24px] w-[24px] mt-6"/>  excluir conta </Text>
          </Link>
          <Link href={'/'}>
             <Text className="text-xl text-black justify-center flex-row items-center"><Image source={exitAcount} className="h-[24px] w-[24px] mt-6"/>  excluir conta </Text>
          </Link>
        </View>

        
      </View>
      
      <Navigator />
    </NavigationProvider>
  );
}
