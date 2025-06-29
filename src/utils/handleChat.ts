import axios from "axios";

export async function handleChat(chat: string) {
  try {
    const response = await axios.post(
      "http://localhost:3333/chatbot",
      {
        prompt: chat, 

      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data.candidates[0].content.parts[0].text)
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
