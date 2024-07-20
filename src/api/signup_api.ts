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
