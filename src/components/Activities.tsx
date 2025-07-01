import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useEffect, useState, useRef } from "react";
import LottieView from 'lottie-react-native';
import { Link } from "expo-router";
import loadingAnimation from '../../animations/Animation - 1751313511924.json';
import ArrowActivities from '../../images/arrowActivities.png';
import { Activity } from "../types/ActiveType";
import { useActivities } from "../contexts/ActivitiesContext";

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const animationRef = useRef<LottieView>(null);
  

  useEffect(() => {
    fetch("http://localhost:3333/activity/")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error on get the activities", error);
        setLoading(false);
      });
  }, []);

  const {getActivityById} = useActivities()

  return (
    <View className="h-[220px] w-full mr-4 bg-white border border-gray-300">
      {loading ? (
        <LottieView
          ref={animationRef}
          source={loadingAnimation as any}
          loop
          autoPlay
        />
      ) : (
        <>
          <Text className="text-center font-bold text-black mb-2">
            Resumo das atividades:
          </Text>

          <ScrollView
            className="flex-1 px-2"
            showsVerticalScrollIndicator={false}
          >
            {activities.map((activity) => (
              <View
                key={activity.id}
                className="w-full mb-2"
              >
                <View className="flex-row items-center justify-between mb-1">
                  <Text className="text-gray-400 font-extralight">
                    {activity.title}
                  </Text>
                   <Pressable onPress={() => getActivityById(activity.id)}>
                    <Link href={"/(tabs)/EditActivity"}>
                     <Image source={ArrowActivities} className="h-[20px]" />
                    </Link>
                   </Pressable>
                
                </View>

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Text className="text-sm font-bold">Tempo: </Text>
                    <Text className="text-sm">{activity.durationInMinutes} min</Text>
                  </View>

                  <View className="flex-row items-center">
                    <Text className="text-sm font-bold">Intensidade: </Text>
                    <Text className="text-sm">{activity.intensity}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}
         <Link href={"/RegisterActivity"}>
            <View className="h-[30px] w-full bg-black rounded-sm flex justify-center items-center">
            <Text className="font-semibold text-white">nova atividade</Text>
          </View>
         </Link>
          
    </View>
  );
}
