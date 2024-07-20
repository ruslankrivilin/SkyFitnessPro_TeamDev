import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks";
import { setUser } from "./slices/userSlices";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase_api";

export default function signinApi(email: string, password: string) {
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
    })
    .catch(() => alert("Invalid user!"));

}
