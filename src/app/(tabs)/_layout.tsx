import { Stack } from "expo-router";
import { ChatProvider } from "@/src/contexts/ChatContext";
import {ActivitiesProvider} from "@/src/contexts/ActivitiesContext"
import { AuthProvider } from "@/src/contexts/AuthContext";

export default function TabsLayout() {
  return (
  <AuthProvider>
     <ActivitiesProvider>
      <ChatProvider>
        <Stack />
     </ChatProvider>
    </ActivitiesProvider>
 </AuthProvider>


  );
}