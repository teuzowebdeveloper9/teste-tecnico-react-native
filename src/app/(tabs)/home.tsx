import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import { View,Text,Image } from "react-native";
import miniLogo from '../../../images/logo-mini.png'
import HomeHeader from "@/src/components/HomeHeader";

export default function Home (){
  return(
    <NavigationProvider>
         <HomeHeader />
          
          <Navigator /> 
    </NavigationProvider>
   
  )
 
}