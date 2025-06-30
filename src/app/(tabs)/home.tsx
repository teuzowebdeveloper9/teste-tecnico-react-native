import Navigator from "@/src/components/navegator";
import { NavigationProvider } from "@/src/contexts/NavigationContext";
import HomeHeader from "@/src/components/HomeHeader";
import RegisterActivity from "@/src/components/registerComponent";
import Activities from "@/src/components/Activities";

export default function Home (){
  return(
    <NavigationProvider>
         <HomeHeader />
         <RegisterActivity  value={31} max={30} />
         <Activities />
          <Navigator /> 
    </NavigationProvider>
   
  )
 
}