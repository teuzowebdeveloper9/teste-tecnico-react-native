import { View } from "react-native";

type RegisterActivityProps = {
  value: number;
  max: number;
};


export default function RegisterActivity ({ value, max }: RegisterActivityProps){
  const Radius = 40
  const Stroke = 10
  const NormalizedRadius = Radius - Stroke/2
  const circunference = NormalizedRadius * Math.PI 

  const Percetage = Math.min(value/max,1)
  const strokeDashoffset = circunference - Percetage * circunference;


  return(
    <View className="flex justify-center items-center h-[150px] w-full mt-2 mb-4 ml-8 bg-white">
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
        {value}
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