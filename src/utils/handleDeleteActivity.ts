export const handleDeleteActivity = async (id: string) => {
  if (!id) {
    console.error("Activity ID not provided");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3333/activity/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete activity");
    }

    console.log(`Activity with ID ${id} deleted successfully.`);
    return true;
  } catch (error) {
    console.error("something went wrong we couldn't delete your activity", error);
    throw error;
  }
};
