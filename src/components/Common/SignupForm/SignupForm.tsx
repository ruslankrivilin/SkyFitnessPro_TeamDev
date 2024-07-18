import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react";

// import { useRouter } from "next/navigation";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { signUpUser } from "@/store/features/userSlice";

// export default function SignupForm() {
//   const router = useRouter();

//   const dispatch = useAppDispatch();
//   const { isUserExists, genericError, isAuthenticated } = useAppSelector(
//     (state) => state.user
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();

//     // if (password !== confirmPassword) {
//     //   setError("Passwords do not match");
//     //   return;
//     // }

//     dispatch(signUpUser({ email, password }));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       router.back();
//     }
//   }, [isAuthenticated, router]);





export default function SignupForm() {
  // const router = useRouter();

  // const dispatch = useAppDispatch();


  const [email, setEmail] = useState("");
  const [passwordFirst, setpasswordFirst] = useState("");
  const [passwordSecond, setpasswordSecond] = useState("");

  const navigate = useNavigate();

  // const [loginData] = useState({ email: "", password: "" });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target; // Извлекаем имя поля и его значение

  //     setLoginData({
  //         ...loginData, // Копируем текущие данные из состояния
  //         [name]: value, // Обновляем нужное поле
  //     });
  // };

  // const [signinData, setSigninData] = useState<SigninType[]>({
  //   login: "",
  //   password: ""
  // })

  const handleSignUp = async () => {
    navigate(appRoutes.MAIN);
  };


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
              className="mb-2.5 border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="passwordFirst"
              type="passwordFirst"
              placeholder="Пароль"
              value={passwordFirst}
              onChange={(e) => setpasswordFirst(e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="mb-4 border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="passwordSecond"
              type="passwordSecond"
              placeholder="Повторите пароль"
              value={passwordSecond}
              onChange={(e) => setpasswordSecond(e.target.value)}
            />
          </div>
        </div>

        {/* {isUserExists && (
          <div className="text-error text-sm mb-8 text-center">
            Данная почта уже используется. Попробуйте войти.
          </div>
        )}
        {genericError && (
          <div className="text-error text-sm mb-8 text-center">
            Что-то пошло не так!
          </div>
        )} */}
        <div className="flex flex-col justify-center items-center">
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal bg-mainColor hover:bg-mainHover active:bg-black" onClick={handleSignUp}>
            Зарегистрироваться</button>
            <Link to={appRoutes.SIGNIN}>
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] border hover:bg-bgColor active:bg-blackout disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark transition-colors duration-300"
          >
            Войти
          </button>
          </Link>
        </div>
      </form>
    </>
  );
}
