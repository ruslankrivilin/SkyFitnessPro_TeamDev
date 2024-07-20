
import { ChangeEvent, useState } from "react";
import { appRoutes } from "../../../lib/appRoutes";
import { useNavigate } from "react-router-dom";

type SignupForm = {
  setIsOpenedSignupForm: (arg: boolean) => void,
  setIsOpenedSigninForm: (arg: boolean) => void,
}

type SignupType = {
  email: string,
  passwordFirst: string,
  passwordSecond: string,
}

export default function SignupForm({ setIsOpenedSigninForm, setIsOpenedSignupForm }: SignupForm) {
  const navigate = useNavigate();

  const [isNotCorrect, setIsNotCorrect] = useState("");

  const [registrationData, setRegistrationData ] = useState<SignupType>({ email: "", passwordFirst: "", passwordSecond: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegistrationData ({ ...registrationData, [name]: value })
  }

  function handleOpenSigninForm() {
    setIsOpenedSigninForm(true);
  }

  const handleSignUp = async () => {
    console.log(handleSignUp)
    const user = localStorage.getItem("user");
    if (user) {
      setIsOpenedSignupForm(false);
      navigate(appRoutes.MAIN);
    }
    if (registrationData.passwordFirst !== registrationData.passwordSecond) {
      setIsNotCorrect("Пароли не совпадают");
      console.log(setIsNotCorrect)
      return;
    }
    
    
  };


  return (
    <>
    <div className="absolute z-50 top-0 left-0 min-w-375 min-h-[100vh] w-[100%] h-[100%]
    flex flex-col justify-center items-center bg-blackout bg-opacity-20">
      <div className="block bg-white max-w-[360px] w-[100%] h-[490px] rounded-blockRadiusMax border-solid border-zinc-300 px-20 py-10">
      
      <div className="mb-12 flex justify-center items-center">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <form>
        <div className=" flex flex-col justify-center items-center">
          <div className=" ">
            <input
              className={!handleSignUp ? "border-errorColor" : "mb-2.5 h-[52px] w-[280px] px-[18px] py-[12px] text-lg rounded-inputRadius appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"}
              name="email"
              type="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <input
              className="mb-2.5 border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="passwordFirst"
              type="passwordFirst"
              placeholder="Пароль"
              value={registrationData.passwordFirst}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <input
              className="mb-4 border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="passwordSecond"
              type="passwordSecond"
              placeholder="Повторите пароль"
              value={registrationData.passwordSecond}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
          <div className="border-errorColor text-error w-[220px] text-sm text-center ">
            Данная почта уже используется. Попробуйте войти. {isNotCorrect}
          </div>
        {/* { is && (
          <div className="border-errorColor text-error w-[220px] text-sm text-center ">
            { is ? "Данная почта уже используется. Попробуйте войти." : `${isNotCorrect}`}
          </div>
        )} */}
        <div className="mt-5 flex flex-col justify-center items-center">
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal 
            bg-mainColor hover:bg-mainHover active:bg-black" onClick={handleSignUp}>
            Зарегистрироваться
          </button>
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] 
            border hover:bg-bgColor active:bg-blackout 
            disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark 
            transition-colors duration-300" onClick={handleOpenSigninForm}>
            Войти
          </button>
        </div>
      </form>
      </div>
      </div>
    </>
  );
}