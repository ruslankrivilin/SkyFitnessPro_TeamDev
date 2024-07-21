import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks";
import { setUser } from "./slices/userSlices";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase_api";
type api = {
  email: string,
  password: string,
}
export default function signinApi({email, password}: api) {
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      const dispatch = useAppDispatch();
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      //setIsLoginModalOpened(false);
      const navigate = useNavigate();
      navigate("/");
      console.log(user);
      //временно для тестов и отслеживания что получаем на выходе
      console.log("Token:", user.refreshToken);
      console.log("ID:", user.uid);
      console.log("Email:", user.email);
    })
    .catch(() => alert("Invalid user!"));

}
