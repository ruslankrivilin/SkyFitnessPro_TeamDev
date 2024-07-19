
import { ChangeEvent, useState } from "react";
import SigninForm from "../SigninForm/SigninForm";

type SignupForm = {
  setIsOpenedSignupForm: (arg: boolean) => void,
}

type SignupType = {
  email: string,
  passwordFirst: string,
  passwordSecond: string,
}

export default function SignupForm({ setIsOpenedSignupForm }: SignupForm) {

  const [IsOpenedSigninForm, setIsOpenedSigninForm] = useState<boolean>(false);

  const [loginData, setLoginData] = useState<SignupType>({ email: "", passwordFirst: "", passwordSecond: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  function handleLogin() {
    setIsOpenedSigninForm(true);
  }

  const handleSignUp = async () => {
    console.log(handleSignUp)
    setTimeout(() => {
      setIsOpenedSignupForm(false)
    }, 3000)
  };


  return (
    <>
    <div className="absolute top-0 left-0 min-w-375 min-h-[100vh] w-[100%] h-[100%]
    flex flex-col justify-center items-center bg-gray-200">
      <div className="block bg-white max-w-[360px] w-[100%] h-[490px] rounded-blockRadiusMax border-solid border-zinc-300 px-20 py-10">
      
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
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <input
              className="mb-2.5 border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="passwordFirst"
              type="passwordFirst"
              placeholder="Пароль"
              value={loginData.passwordFirst}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <input
              className="mb-4 border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="passwordSecond"
              type="passwordSecond"
              placeholder="Повторите пароль"
              value={loginData.passwordSecond}
              onChange={handleInputChange}
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
            transition-colors duration-300" onClick={handleLogin}>
            Войти
          </button>
          {IsOpenedSigninForm && <SigninForm setIsOpenedSigninForm={setIsOpenedSigninForm} />}
        </div>
      </form>
      </div>
      </div>
    </>
  );
}