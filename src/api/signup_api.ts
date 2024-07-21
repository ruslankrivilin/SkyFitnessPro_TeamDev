import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./slices/userSlices";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase_api";
type api = {
  email: string,
  passwordFirst: string,
  passwordSecond: string,
}
export default function signupApi(
  {email, passwordFirst}: api
) {
  createUserWithEmailAndPassword(auth, email, passwordFirst)
    .then(({ user }) => {
      console.log(user);
      const dispatch = useAppDispatch();
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      const navigate = useNavigate();
      navigate("/");
    })
    .catch(console.error);
}
