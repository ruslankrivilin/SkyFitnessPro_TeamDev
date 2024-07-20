import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./slices/userSlices";
import { auth } from "./firebase_api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";

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
    })
    .catch(() => alert("Ошибка авторизации! Попробуйте зарегистрироваться."));
  console.log({ email, password });
}
