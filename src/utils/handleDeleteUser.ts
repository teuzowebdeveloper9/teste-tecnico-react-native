import { Alert } from "react-native";
import { ExludeType } from "../types/excludeType";

export async function handleExcludeUser({email,password} : ExludeType) {
  if (!email || !password) {
    Alert.alert("Erro", "Preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch('http://localhost:3333/activity', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email , password }),
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir a conta");
    }

    Alert.alert("Sucesso", "Conta excluída com sucesso!");
  } catch (error) {
    console.error(error);
    Alert.alert("Erro", "Não foi possível excluir a conta.");
  }
}
