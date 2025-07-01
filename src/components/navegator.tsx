import { View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useNavigationTab } from "../contexts/NavigationContext";

import chatAI from '../../images/Button-Navbar.png';
import chatAISelected from '../../images/chatAiSelected.png';
import IconInicio from '../../images/iconInicio.png';
import IconInicioSelected from '../../images/iconInicioSelected.png';
import configIcon from '../../images/configIcon.png';
import configIconSelected from '../../images/configIconSelected.png';

export default function Navigator() {
  const { selectedTab, setSelectedTab } = useNavigationTab();

  return (
    <View className="bg-white absolute bottom-0 border-t mb-4 border-gray-200 w-screen h-[80px] justify-center items-center">
      <View className="flex flex-row justify-around w-full">
        <Link href="/chat" asChild>
          <TouchableOpacity onPress={() => setSelectedTab('chat')}>
            <Image
              className="w-[30px] h-[30px]"
              source={selectedTab === 'chat' ? chatAISelected : chatAI}
            />
          </TouchableOpacity>
        </Link>

        <Link href="/home" asChild>
          <TouchableOpacity onPress={() => setSelectedTab('home')}>
            <Image
              className="w-[30px] h-[30px]"
              source={selectedTab === 'home' ? IconInicioSelected : IconInicio}
            />
          </TouchableOpacity>
        </Link>

        <Link href="/config" asChild>
          <TouchableOpacity onPress={() => setSelectedTab('config')}>
            <Image
              className="w-[30px] h-[30px]"
              source={selectedTab === 'config' ? configIconSelected : configIcon}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
