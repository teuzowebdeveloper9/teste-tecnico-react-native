import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import HomeHeader from "@/src/components/HomeHeader";
import RegisterActivity from "@/src/components/registerComponent";

export default function Home (){
  return(
    <NavigationProvider>
         <HomeHeader />
         <RegisterActivity  value={31} max={30} />
          <Navigator /> 
    </NavigationProvider>
   
  )
 
}