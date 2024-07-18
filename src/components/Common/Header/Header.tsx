import { useEffect, useState } from "react";
import "../../../css/style.css";
import SigninForm from "../SigninForm/SigninForm";
import UserModal from "../UserModal/UserModal";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

// import UserModal from "../UserModal/UserModal";
type HeaderType = {
  page: string;
}

export default function Header({page}: HeaderType) {
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
    if (page === "CorrectForTextPage") {
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
    <div className="flex justify-between  py-[40px]">
      <div className="flex flex-col md:space-y-[15px]">
        <div className="flex">
          <Link to={appRoutes.MAIN}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        {isCorrectForTextPage && (
          <div className="space-y-[60px] ">
            <p className="font-roboto hidden md:flex">
              Онлайн тренировки для занятий дома
            </p>
          </div>
        )}
      </div>

      {/* Если пользователь авторизован, то user Блок */}
      {isAuthorizated ? (
        <div className="flex items-center">
          <svg className="m-[16px] h-[50px] w-[50px]">
            <use xlinkHref="./public/icons/sprite.svg#icon-profile" />
          </svg>

          <div className="ml-2 flex items-center" onClick={handleUserModal}>
            <div className="hidden md:mr-[12px] ">Сергей</div>
            <svg className="h-[8px] w-[8px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-user-arrow" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="px-[16px] py-[8px] rounded-buttonRadius bg-mainColor text-center  font-normal text-black hover:bg-mainHover md:px-btnX md:py-btnY w-[103px] h-[52px] size-[18px]"
          onClick={handleOpenSigninForm}
        >
          Войти
        </div>
      )}
      {isOpenedSigninForm && (
        <SigninForm setIsOpenedSigninForm={setIsOpenedSigninForm} />
      )}
      {isOpenedUserModal && <UserModal setIsOpenedUserModal={setIsOpenedUserModal}/>}
    </div>
  );
}
