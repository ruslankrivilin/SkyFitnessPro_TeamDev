import { ChangeEvent, useState } from "react";
import SignupForm from "../SignupForm/SignupForm";
// import { signIn } from "../../../api/signin_api";


type SigninForm = {
  setIsOpenedSigninForm: (arg: boolean) => void,
}

type SigninType = {
  email: string,
  password: string,
}


export default function SigninForm({ setIsOpenedSigninForm }: SigninForm) {
  
  const [IsOpenedSignupForm, setIsOpenedSignupForm] = useState<boolean>(false);

  const [loginData, setLoginData] = useState<SigninType>({ email: "", password: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  function handleRegin() {
    setIsOpenedSignupForm(true);
  }

  const handleLogin = async () => {
    console.log(handleLogin)
    setTimeout(() => {
      setIsOpenedSigninForm(false)
    }, 3000)
  };


  return (
    <>
    {/* не понятно как записать это: background: rgba(0, 0, 0, 0.4); потому что фон должен быть едва заметен таким способом, а в tailwaid не хочет*/}
    <div className="absolute top-0 left-0 min-w-[375px] min-h-[100vh] w-[100%] h-[100%]
    flex flex-col justify-center items-center bg-gray-200">
      <div className="block bg-white max-w-[360px] w-[100%] h-[425px] rounded-blockRadiusMax border-solid border-zinc-300 px-20 py-10">
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
              className="border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="password"
              type="password"
              placeholder="Пароль"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal bg-mainColor hover:bg-mainHover active:bg-black"
            onClick={handleLogin}>
            Войти
          </button>
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius 
              text-[18px] font-normal leading-[19.8px] 
              border hover:bg-bgColor active:bg-blackout border-zinc-900
              disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark transition-colors duration-300"
            onClick={handleRegin}>
            Зарегистрироваться
          </button>
          {IsOpenedSignupForm && <SignupForm setIsOpenedSignupForm={setIsOpenedSignupForm}/>}
        </div>
      </form>
      </div>
      </div>
    </>
  );
}
