
import { Stack } from "expo-router";
import { ChatProvider } from "@/src/contexts/ChatContext";

export default function TabsLayout() {
  return (
    <ChatProvider>
      <Stack />
    </ChatProvider>
  );
}