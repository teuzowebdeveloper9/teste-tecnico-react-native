import { CreateActivityProps } from "../interfaces/createActivityProps";

export const handleUpdateActivity = async (
  id: string,
  { durationInMinutes, itensity, nameActivity }: CreateActivityProps
) => {
  if (nameActivity === "" || itensity === "" || durationInMinutes === 0) {
    return;
  }

  try {
    const response = await fetch(`http://localhost:3333/activity/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: nameActivity,
        intensity: itensity,
        durationInMinutes: Number(durationInMinutes),
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao atualizar atividade");
    }

    const updated = await response.json();
    console.log("sucess on update", updated);
    return updated;
  } catch (error) {
    console.error("Error on edit activity", error);
    throw error;
  }
};
