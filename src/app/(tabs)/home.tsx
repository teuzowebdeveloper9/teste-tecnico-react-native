import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import HomeHeader from "@/src/components/HomeHeader";

export default function Home (){
  return(
    <NavigationProvider>
         <HomeHeader />
          
          <Navigator /> 
    </NavigationProvider>
   
  )
 
}