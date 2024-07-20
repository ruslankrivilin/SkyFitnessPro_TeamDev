import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./slices/userSlices";

type RegData = [name:string, email:string, password:string]

export default function signupApi (auth, email:RegData, password:RegData) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      );
      navigate("/");
    })
    .catch(console.error);
  };