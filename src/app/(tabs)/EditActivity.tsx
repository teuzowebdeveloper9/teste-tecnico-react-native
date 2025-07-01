import { Modal, Text, View,Image, Pressable, TextInput } from "react-native"
import { useActivities } from "@/src/contexts/ActivitiesContext"
import GenericActivitys from "@/src/components/GenericActivitys"
import { useState } from "react"
import { Link } from "expo-router"
import closeModalActivity from '@/images/closeModalActivity.png'
import Navigator from "@/src/components/navegator"
import { NavigationProvider } from "@/src/contexts/NavigationContext"
import { Picker } from "@react-native-picker/picker"
import { handleUpdateActivity } from "@/src/utils/handleUpdateActivity"
import FormUpdateActivity from "@/src/components/FormUpdateactivity"

export default function EditActicity(){
  
 
  return(
   <View className="p-4">
      <GenericActivitys />
      <FormUpdateActivity />
      </View> 

  )
}