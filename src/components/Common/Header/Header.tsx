import { useEffect, useState } from "react";
import "../../../css/style.css";
import SigninForm from "../SigninForm/SigninForm";
import UserModal from "../UserModal/UserModal";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

// import UserModal from "../UserModal/UserModal";
type HeaderType = {
  page: string;
};

export default function Header({ page }: HeaderType) {
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
  }, [page]);

  useEffect(() => {
    if (page) {
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
    <div className="flex justify-between py-[40px] md:pb-[60px] md:pt-[50px]">
      <div className="flex flex-col">
        <div className="flex md:mb-[15px]">
          <Link to={appRoutes.MAIN}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        {isCorrectForTextPage && (
          <div className="space-y-[60px]">
            <p className="font-roboto hidden md:flex md:text-stone-500">
              Онлайн тренировки для занятий дома
            </p>
          </div>
        )}
      </div>

      {/* Если пользователь авторизован, то user Блок */}
      {isAuthorizated ? (
        <div className="flex items-center" onClick={handleUserModal}>
          <svg className="mr-[10px] h-[36px] w-[36px] md:m-[16px] md:h-[50px] md:w-[50px]">
            <use xlinkHref="./public/icons/sprite.svg#icon-profile" />
          </svg>

          <div className="ml-2 flex items-center">
            <div className="hidden md:mr-[12px]">Сергей</div>
            <svg className="h-[4px] w-[8px] md:h-[8px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-user-arrow" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="size-[18px] h-[36px] w-[83px] rounded-buttonRadius bg-mainColor px-[16px] py-[8px] text-center font-normal text-black hover:bg-mainHover md:h-[52px] md:w-[103px] md:px-btnX md:py-btnY md:leading-[20px]"
          onClick={handleOpenSigninForm}
        >
          Войти
        </div>
      )}
      {isOpenedSigninForm && (
        <SigninForm setIsOpenedSigninForm={setIsOpenedSigninForm} />
      )}
      {isOpenedUserModal && (
        <UserModal setIsOpenedUserModal={setIsOpenedUserModal} />
      )}
    </div>
  );
}
