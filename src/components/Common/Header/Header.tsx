import { useEffect, useState } from "react";
import "../../../css/style.css";
import SigninForm from "../SigninForm/SigninForm";
import UserModal from "../UserModal/UserModal";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

// import UserModal from "../UserModal/UserModal";

export default function Header(page: string) {
  const [isAuthorizated, setIsAuthorizated] = useState<boolean>(false);
  const [isOpenedSigninForm, setIsOpenedSigninForm] = useState<boolean>(false);
  const [isOpenedUserModal, setIsOpenedUserModal] = useState<boolean>(false);
  const [isCorrectForTextPage, setIsCorrectForTextPage] =
    useState<boolean>(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthorizated(true);
    } else {
      setIsAuthorizated(false);
    }
  }, []);

  useEffect(() => {
    if (page === "MainPage" || page === "CoursePage") {
      setIsCorrectForTextPage(true);
    } else {
      setIsCorrectForTextPage(false);
    }
  }, [page]);

  function handleOpenSigninForm() {
    setIsOpenedSigninForm(true);
  }
  function handleUserModal() {
    setIsOpenedUserModal((prevState) => !prevState);
  }

  return (
    <div className="container mx-auto mt-[50px] flex items-center justify-between">
      <div className="flex flex-col space-y-[15px]">
        <div>
          <Link to={appRoutes.MAIN}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        {isCorrectForTextPage && (
          <div className="space-y-[60px]">
            <p className="font-roboto hidden md:flex">
              Онлайн тренировки для занятий дома
            </p>
          </div>
        )}
      </div>
      

      {/* <button
        className="h-[52px] w-[103px] rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover" 
      >
        Войти
      </button> */}
     
      
      {/* Если пользователь авторизован, то user Блок */}
      <div>
        <svg className="">
           <use xlinkHref="public/icons/profile_icon.svg" /> 
        </svg>

        <div>
          <div>Сергей</div>
          <svg className="">
           <use xlinkHref="public/icons/user_arrow_icon.svg" /> 
          </svg>

          <div className="ml-2 flex items-center" onClick={handleUserModal}>
            <div className="mr-[12px]">Сергей</div>
            <svg className="h-[8px] w-[8px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-user-arrow" />
            </svg>
          </div>
        </div>
      ) : (
        <button
          className="h-[52px] w-[103px] rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover"
          onClick={handleOpenSigninForm}
        >
          Войти
        </button>
      )}
      {isOpenedSigninForm && (
        <SigninForm setIsOpenedSigninForm={setIsOpenedSigninForm} />
      )}
      {isOpenedUserModal && <UserModal setIsOpenedUserModal={setIsOpenedUserModal}/>}
    </div>
  );
}
