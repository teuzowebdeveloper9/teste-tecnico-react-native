import { View } from "react-native";
import { RegisterActivityProps } from "../types/RegisterActivity";
import { useEffect, useState } from "react";




export default function RegisterActivity ({  max }: RegisterActivityProps){

  const [numberActivity,setNumberActivity] = useState(0)

  
useEffect(() => {
    fetch("http://localhost:3333/activity/")
      .then((response) => response.json())
      .then((data) => {
        setNumberActivity(data.length)

      })
      .catch((error) => {
        console.error("error on get the activities", error);
      });
  }, []);


  const Radius = 40
  const Stroke = 10
  const NormalizedRadius = Radius - Stroke/2
  const circunference = NormalizedRadius * Math.PI 

  const Percetage = Math.min(numberActivity/max,1)
  const strokeDashoffset = circunference - Percetage * circunference;


  return(
    <View className="flex justify-center items-center h-[250px] w-full mt-2 mb-4 rounded-sm bg-white">
       <svg height="100" width="100" viewBox="0 0 100 50">
      <path
        d="
          M 10 50
          A 40 40 0 0 1 90 50
        "
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth={Stroke}  
      />
      <path
        d="
          M 10 50
          A 40 40 0 0 1 90 50
        "
        fill="transparent"
        stroke="#333"
        strokeWidth={Stroke}
        strokeDasharray={circunference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
      <text
        x="50"
        y="40"
        textAnchor="middle"
        fontSize="20"
        fill="#333"
      >
        {numberActivity}
      </text>
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="10"
        fill="#777"
      >
        registrados
      </text>
    </svg>
    </View>
      
  )

}