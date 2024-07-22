import { ChangeEvent, useState } from "react";
import SignupForm from "../SignupForm/SignupForm";
import { appRoutes } from "../../../lib/appRoutes";
import { useNavigate } from "react-router-dom";
import signinApi from "../../../api/signin_api";
import { useUserData } from "../../../hooks/useUserData";


type SigninForm = {
  setIsOpenedSigninForm: (arg: boolean) => void,
}

type SigninType = {
  email: string,
  password: string,
}


export default function SigninForm({ setIsOpenedSigninForm }: SigninForm) {
  const navigate = useNavigate();

  const { login } = useUserData();

  const [isOpenedSignupForm, setIsOpenedSignupForm] = useState<boolean>(false);

  const [isOpenedEmailForm, setIsOpenedEmailForm] = useState<boolean>(false);

  const [loginData, setLoginData] = useState<SigninType>({ email: "", password: "" });

  const [isNotCorrectPassword, setIsNotCorrectPassword] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  function handleOpenSignupForm() {
    setIsOpenedSignupForm(true);
  }

  function handleRecoverPassword() {
    setIsOpenedEmailForm(true);
    setTimeout(() => {
      setIsOpenedEmailForm(false);
    }, 3000)
  }

  const handleLogin = async () => {
    setIsNotCorrectPassword(false);
    await signinApi(loginData.email, loginData.password).then((data) => {
      login(data.user);
      navigate(appRoutes.MAIN);
      setIsOpenedSigninForm(false);
    }).catch(() => {
      setIsNotCorrectPassword(true);
    })
  };

  return (
    <>
      {!isOpenedSignupForm && (
        <div className="absolute z-50 top-0 left-0 min-w-[375px] min-h-[100vh] w-[100%] h-[100%]
    flex flex-col justify-center items-center bg-black bg-opacity-20">
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
                    className={!handleLogin ? "border-errorColor " : "mb-3 h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
                    }
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={loginData.password}
                    onChange={handleInputChange}
                  />
                </div>
                {isNotCorrectPassword && (
                  <>
                    <div className="text-errorColor text-error w-[270px] text-sm text-center">
                      Пароль введен неверно, попробуйте еще раз.&nbsp;
                      <button
                        className="text-errorColor underline"
                        onClick={handleRecoverPassword} >
                        Восстановить пароль?
                      </button>
                    </div>
                  </>
                )}
                {isOpenedEmailForm &&
                  (<div className="absolute z-50 top-0 left-0 min-w-[375px] min-h-[100vh] w-[100%]
                    flex flex-col justify-center items-center bg-black bg-opacity-20">
                    <div className=" bg-white max-w-[360px] w-[100%]  h-[450px] rounded-blockRadiusMax border-solid border-zinc-300 px-20 py-10
                    flex items-center">
                      <div className="flex justify-center items-center flex-col">
                        <img src="/images/logo.png" alt="logo" />
                        <div className="mt-10 text-center text-[18px]">Ссылка для востановления пароля отправлена на {loginData.email}</div>
                      </div>
                    </div>
                  </div>)
                }
              </div>
              <div className="mt-3 flex flex-col justify-center items-center">
                <button
                  className=" h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal bg-mainColor hover:bg-mainHover active:bg-black"
                  onClick={handleLogin}>
                  Войти
                </button>
                <button
                  className="mt-3 h-[52px] w-[280px] rounded-buttonRadius 
                  text-[18px] font-normal leading-[19.8px] 
                  border hover:bg-bgColor active:bg-blackout border-zinc-900
                  disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark transition-colors duration-300"
                  onClick={handleOpenSignupForm}>
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>)}

      {isOpenedSignupForm && <SignupForm setIsOpenedSignupForm={setIsOpenedSignupForm} setIsOpenedSigninForm={setIsOpenedSigninForm} />}

    </>
  );
}