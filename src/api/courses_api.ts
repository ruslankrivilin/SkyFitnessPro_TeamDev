







//Получение списка задач
export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.status === 200) {
      throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
  }