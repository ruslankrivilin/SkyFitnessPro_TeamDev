import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


//Регистрация

// Получение объекта аутентификации
const auth = getAuth(app);

// Функция для регистрации пользователя
async function signUp({ auth, email, password }) {
  try {
    // Отправка запроса на регистрацию пользователя
    const userCredential = await createUserWithEmailAndPassword(auth, login, password);
    const user = userCredential.user;
    
    // Дополнительные действия после успешной регистрации
    console.log('Пользователь успешно зарегистрирован:', user);
  } catch (error) {
    // Обработка ошибок при регистрации
    console.error('Ошибка при регистрации пользователя:', error);
  }
}


  
/* export function signUp({ login, name, password }) {
    return fetch(userHost, {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    }).then((response) => {
      if (response.status === 400) {
        throw new Error("Пользователь уже зарегистрирован");
      }
      return response.json();
    });
  } */