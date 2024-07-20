import { ChangeEvent, useState } from "react";
// import { changePassword } from "../../../api/signin_api";
// import { appRoutes } from "../../../lib/appRoutes";
// import { useNavigate } from "react-router-dom";

type ErrorType = {
  password: string,  
  repeatPassword: string,
}

export default function UserProfile() {
  
  const [isNotCorrect, setIsNotCorrect] = useState("");

  // const navigate = useNavigate();
  
  const [isChangeMode, setIsChangeMode] = useState<ErrorType>({ password: "", repeatPassword: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIsChangeMode({ 
      ...isChangeMode, 
      [name]: value })
  }

  function onClick() {
    if (!isChangeMode.password.trim() || !isChangeMode.repeatPassword.trim()) {
      setIsNotCorrect("Заполните все поля!");
      return;
    }
    if (isChangeMode.password !== isChangeMode.repeatPassword) {
      setIsNotCorrect("Пароли не совпадают");
      return;
    }
    // changePassword(isChangeMode.password)
    //   .then(() => {
    //     navigate(appRoutes.USER_PROFILE);
    //   })
    //   .catch((isNotCorrect) => {
    //     setIsNotCorrect(isNotCorrect.message);
    //   });
  }

  return (
    <>
    <div className="absolute top-0 left-0 min-w-[375px] min-h-[100vh] w-[100%] h-[100%]
    flex flex-col justify-center items-center bg-blackout bg-opacity-20
    ">
      <div className="block bg-white max-w-[360px] w-[100%] h-[425px] rounded-blockRadiusMax border-solid border-zinc-300 px-20 py-10">
      <div className="mb-12 flex justify-center items-center">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <form>
        <div className=" flex flex-col justify-center items-center">
          <div className=" ">
            <input
              className="mb-2.5 h-[52px] w-[280px] px-[18px] py-[12px] text-lg rounded-inputRadius appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
              name="password"
              type="password"
              placeholder="Новый пароль"
              value={isChangeMode.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <input
              className="border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
              name="repeatPassword"
              type="password"
              placeholder="Повторите пароль"
              value={isChangeMode.repeatPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-red-500">{isNotCorrect}</div>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <button
            className="mt-3 h-[52px] w-[280px] rounded-buttonRadius text-[18px] font-normal bg-mainColor hover:bg-mainHover active:bg-black"
            onClick={onClick}>
            Подтвердить
          </button>
        </div>
      </form>
      </div>
      </div>
    </>
  );
}
