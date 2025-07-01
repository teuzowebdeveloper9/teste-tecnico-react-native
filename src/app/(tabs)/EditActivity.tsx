import {  View } from "react-native"
import FormUpdateActivity from "@/src/components/updateactivity"
import GenericActivitys from "@/src/components/GenericActivitys"
export default function EditActicity(){
  
 
  return(
   <View className="p-4">
       <GenericActivitys />
       <FormUpdateActivity />
      </View> 

  )
}