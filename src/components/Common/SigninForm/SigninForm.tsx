
import { Link } from "react-router-dom";
// import styles from "./signin.module.css"
// import classNames from "classnames";
import { appRoutes } from "../../../lib/appRoutes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../../api/signin_api";
// import classNames from "classnames";

// function login() {
//   setUser(newUser)
//   localStorage.setItem("user", JSON.stringify(newUser))
// }
function login() {
  
}



export default function SigninForm() {
  // const router = useRouter();

  // const dispatch = useAppDispatch();
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loginData] = useState({ email: "", password: "" });



    // const [signinData, setSigninData] = useState<SigninType[]>({
    //   login: "",
    //   password: ""
    // })

    const handleLogin = async () => {
      await signIn(loginData).then(() => {
          login()
          navigate(appRoutes.MAIN);
      })
  };

//   const handleLogin = async () => {
//     console.log(handleLogin)
//     navigate(appRoutes.MAIN);
// };


  return (
    <>
      <div className="mb-12 flex justify-center items-center">
      <img src="/images/logo.png" alt="logo" />
      </div>
      <form>
        <div className=" flex flex-col justify-center items-center">
        <div className=" ">
          <input
            className="mb-2.5 h-[52px] w-[280px] px-[18px] py-[12px] text-lg rounded-inputRadius appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="">
          <input
            className="border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
            name="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
         </div>
        <div className="flex flex-col justify-center items-center">
          <button 
          className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal bg-mainColor hover:bg-mainHover active:bg-black" onClick={handleLogin}>
          Войти
          </button>
          <Link to={appRoutes.SIGNUP}>
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] border hover:bg-bgColor active:bg-blackout disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark transition-colors duration-300"
          >
            Зарегистрироваться            
          </button>
          </Link>
        </div>
      </form>
    </>
  );
}
