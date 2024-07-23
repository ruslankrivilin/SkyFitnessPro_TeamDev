
import { Link } from "react-router-dom";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";
import { appRoutes } from "../../lib/appRoutes";
import { ChangeEvent, useState } from "react";
// import { useUserData } from "../../hooks/useUserData";

type ErrorType = {
  password: string,
  repeatPassword: string,
}


type UserModalType = {
  setIsOpenedUserModal: (arg: boolean) => void;
  setIsAuthorizated: (arg: boolean) => void;
};

export default function UserProfilePage() {

  const [isNotCorrect, setIsNotCorrect] = useState("");


  const [isChangeMode, setIsChangeMode] = useState<ErrorType>({ password: "", repeatPassword: "" });

  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const [isKnopka, setIsKnopka] = useState(true);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIsChangeMode({
      ...isChangeMode,
      [name]: value
    })
  }

  function handleChangePassword() {
    setIsPasswordCorrect(false);
    setIsKnopka(false);
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
    else {
      setIsPasswordCorrect(true);
      setIsKnopka(true);
    }
  }

  const handleLogout = () => {
    setIsOpenedUserModal(false);
    setIsAuthorizated(false);
    // logout();
  };


  return (
    <>
      <div className="h-screen">
        <Header page={""} />
        <h2
          data-tid="titleProfile"
          className="mb-10 ml-8 text-[40px] sm:text-[26px] md:text-[32px] font-semibold leading-[44px]"
        >
          Профиль
        </h2>
        <div
          data-tid="profileUserInfoBlock"
          className="mb-10 ml-8 mr-8 bg-white-base mt-10 sm:mt-6 md:mt-6 h-[257px] sm:h-auto p-[30px] rounded-[30px] shadow-xl"
        >
          <div
            data-tid="contentBlock"
            className="flex flex-row gap-[30px] md:gap-6 "
          >
            <svg className="">
              <use xlinkHref="./public/icons/sprite.svg#icon-profile-nophoto-full" />
            </svg>
            <div
              data-tid="userData"
              className="flex flex-col gap-[10px] "
            >
              <h3 className="text-[32px] sm:text-[26px] font-medium leading-[35px]">
                Сергей
              </h3>
              <div className="mt-3 text-[18px] font-normal leading-[19px]">
                Логин: Сергей
              </div>
              {isPasswordCorrect && (
                <div className="flex items-center text-[18px] font-normal leading-[19px] ">
                  Пароль:
                  <button
                    className="w-[120px] sm:h-[25px] rounded-blockRadiusMin border bg-gray-400 text-gray-400"
                  >
                  </button>
                </div>
              )}
              {!isPasswordCorrect && (
                <>
                  <input
                    className="mb-2.5 h-[52px] w-[280px] px-[18px] py-[12px] text-lg rounded-inputRadius appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                    name="password"
                    type="password"
                    placeholder="Старый пароль"
                    value={isChangeMode.password}
                    onChange={handleInputChange} />
                  <input
                    className="border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
                    name="repeatPassword"
                    type="password"
                    placeholder="Новый пароль"
                    value={isChangeMode.repeatPassword}
                    onChange={handleInputChange} />
                  <div className="text-red-500">{isNotCorrect}</div>
                </>
              )}

              <div className="mt-5 w-[394px] flex flex-row gap-[10px] sm:items-center">

                {isKnopka && (
                  <button
                    onClick={handleChangePassword}
                    className="w-[192px] sm:h-[50px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] 
                  border  bg-mainColor hover:bg-mainHover active:bg-black"
                  >
                    Изменить пароль
                  </button>
                )}
                {!isKnopka && (
                  <button
                    onClick={onClick}
                    className="w-[192px] sm:h-[50px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] 
                  border  bg-mainColor hover:bg-mainHover active:bg-black"
                  >
                    Сохранить
                  </button>
                )}
                <Link to={appRoutes.MAIN}>
                  <button
                    onClick={handleLogout}
                    className="w-[192px] sm:h-[50px] rounded-buttonRadius 
                text-[18px] font-normal leading-[19.8px] 
                border hover:bg-bgColor active:bg-blackout border-zinc-900"
                  >
                    Выйти
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h2
          className="mb-10 ml-8 text-[40px] sm:text-[26px] md:text-[32px] font-semibold leading-[44px]">
          Мои курсы
        </h2>
        <div className="mb-10 ml-8 mr-8 gap-x-16">
          <div className="grid-cols-1 sm:grid">
            <CourseCard isMainPage={false} />
          </div>
        </div>
      </div>
    </>
  );
}
