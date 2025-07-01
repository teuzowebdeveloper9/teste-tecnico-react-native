import { Stack } from "expo-router";
import { ChatProvider } from "@/src/contexts/ChatContext";
import {ActivitiesProvider} from "@/src/contexts/ActivitiesContext"

export default function TabsLayout() {
  return (
    <ActivitiesProvider>
    <ChatProvider>
      <Stack />
    </ChatProvider>
  </ActivitiesProvider>

  );
}