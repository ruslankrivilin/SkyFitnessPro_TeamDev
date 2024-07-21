import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { setUser } from "./slices/userSlices";
import { auth } from "./firebase_api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { getFavoriteCourseOfUser } from "./courses_api";

// signinApi должна быть компонентом React, переименовл ее заглавной буквы.
//В ином случае не работают хуки useAppDispatch и useNavigate
export default function SigninApi(email: string, password: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log({ email, password });
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(auth, email, password);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      navigate("/");
      console.log(user);
      console.log({ email, password });

      // Получение курсов, относящихся только к конкретному userId
      getFavoriteCourseOfUser(user.uid)
        .then((courses) => {
          console.log(courses);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch(() => alert("Ошибка авторизации! Попробуйте зарегистрироваться."));
  console.log({ email, password });
}

// //Авторизация Login c разделением на api и formPage

// //Login api
// import { signInWithEmailAndPassword } from "./path/to/firebase/auth";
// import { auth } from "./path/to/firebase";
// import { useAppDispatch } from "./path/to/appDispatch";
// import { setUser } from "./path/to/userActions";
// import { getFavoriteCourseOfUser } from "./path/to/courseApi";

// export const signinApi = async (email: string, password: string) => {
//   try {
//     const { user } = await signInWithEmailAndPassword(auth, email, password);
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
//     alert("Ошибка авторизации! Попробуйте зарегистрироваться.");
//   }
// };
// //Login form
// import { SigninApi } from "./api";
// // Код компонента LoginForm
// // Пример использования функции signinApi
// const handleSignIn = async (email: string, password: string) => {
//   try {
//     await signinApi(email, password);
//   } catch (error) {
//     console.error("Ошибка при авторизации:", error);
//   }
// };





//Сброс пароля
export const changePassword = async (password: string) => {
  try {
    if (!auth.currentUser) {
      throw new Error("Нет авторизации");
    }
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};


//---------------------------------------------------------------------
//смена пароля для api c разделением
//принимает пароль в качестве аргумента. 
//Функция проверяет, есть ли текущий авторизованный пользователь (auth.currentUser), 
//и затем вызывает функцию updatePassword для обновления пароля. Если происходит ошибка, 
//она будет обработана и выброшено исключение с сообщением об ошибке.
// export const changePassword = async (password: string) => {
//   try {
//     if (!auth.currentUser) {
//       throw new Error("Нет авторизации");
//     }
//     await updatePassword(auth.currentUser, password);
//   } catch (error) {
//     if (error instanceof Error) throw new Error(error.message);
//   }
// };
// //Смена пароля для Form
// //handlePasswordChange вызывает changePassword с новым паролем и обрабатывает успешное изменение пароля или ошибку при изменении.
// import { changePassword } from "./api";
// // Код компонента LoginForm
// // Пример использования функции changePassword
// const handlePasswordChange = async (newPassword: string) => {
//   try {
//     await changePassword(newPassword);
//     console.log("Пароль успешно изменен");
//   } catch (error) {
//     console.error("Ошибка при изменении пароля:", error);
//   }
// };
