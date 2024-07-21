import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./slices/userSlices";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase_api";

// signupApi должна быть компонентом React, переименовл ее заглавной буквы.
//В ином случае не работают хуки useAppDispatch и useNavigate
export default function SignupApi(email: string, password: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      //для теста выводимых параметров.
      console.log("courseID:", "");
      console.log("Progress:", "");
      console.log("token:", user.refreshToken);
      console.log("id:", user.uid);
      console.log("email:", user.email);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      navigate("/");
    })
    .catch(console.error);
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

