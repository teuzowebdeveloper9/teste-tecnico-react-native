import HomeHeader from '@/src/components/HomeHeader'
import {View,Text,ScrollView } from 'react-native'
import RegisterComponent from "@/src/components/registerComponent";
import {useActivities} from '@/src/contexts/ActivitiesContext'

export default function RegisterActivity() {
   
    const {activities}  = useActivities();

  return(
    <View className='h-screen flex p-4 w-screen  '>
      <HomeHeader/>
      <View className='flex  rounded-sm'>
         <RegisterComponent   max={30} />
         <Text className='flex-row ml-2 text-black font-semibold'>ultimas atividades registradas</Text>
         <View className='flex border-b border-gray-300 justify-between w-full'>
            <View className="max-h-[200px]">
  <ScrollView>
    {activities.map((activity) => (
      <View
        key={activity.id}
        className="flex-row justify-between gap-4 p-2"
      >
        <View className="flex-col items-start">
          <Text className="text-xs text-gray-400">Nome</Text>
          <Text className="text-base font-semibold text-black">{activity.title}</Text>
        </View>

        <View className="flex-col items-start">
          <Text className="text-xs text-gray-400">Intensidade</Text>
          <Text className="text-base font-semibold text-black">{activity.intensity}</Text>
        </View>

        <View className="flex-col items-start">
          <Text className="text-xs text-gray-400">Duração</Text>
          <Text className="text-base font-semibold text-black">{activity.durationInMinutes} min</Text>
        </View>
      </View>
      ))}
     </ScrollView>
   </View>
     
        </View>
      </View>
    </View>
  ) 
}