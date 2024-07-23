import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase_api";
import { UserType } from "../types";

// signupApi должна быть компонентом React, переименовл ее заглавной буквы.
//В ином случае не работают хуки useAppDispatch и useNavigate
export async function SignupApi(email: string, password: string) {
  
  const resSignup = await createUserWithEmailAndPassword(auth, email, password)
  if (!resSignup) {
    throw new Error("Ошибка");
  }
  const dataSignup = await resSignup.user.toJSON() as UserType;
  return dataSignup
}


// //---------------------------------------------
// //Разделение функция для api & regForm

// //For API
// export const signupApi = async (email: string, password: string) => {
//   try {
//     const { user } = await createUserWithEmailAndPassword(auth, email, password);
//     const dispatch = useAppDispatch();
//     dispatch(
//       setUser({
//         email: user.email,
//         id: user.uid,
//         token: user.refreshToken,
//       }),
//     );
//     navigate("/");
//     console.log(user);
//     console.log({ email, password });

//     // Получение курсов, относящихся только к конкретному userId
//     getFavoriteCourseOfUser(user.uid)
//       .then((courses) => {
//         console.log(courses);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// };

// //for regForm
// import { signupApi } from "./api";
// // Код компонента RegForm
// // Пример использования функции signupApi
// const handleSignup = async (email: string, password: string) => {
//   try {
//     await signupApi(email, password);
//   } catch (error) {
//     console.error("Ошибка при регистрации:", error);
//   }
// };

