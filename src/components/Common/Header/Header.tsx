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
    useState<string>("");
   
 

  useEffect(() => {
   setIsCorrectForTextPage(page)
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthorizated(true);
    } else {
      setIsAuthorizated(false);
    }
  }, [page]);

 

  function handleOpenSigninForm() {
    setIsOpenedSigninForm(true);
  }
  function handleUserModal() {
    setIsOpenedUserModal((prevState) => !prevState);
  }

  return (
    <div className="flex justify-between py-[40px] md:pt-[50px] md:pb-[60px]">
      <div className="flex flex-col ">
        <div className="flex md:mb-[15px]">
          <Link to={appRoutes.MAIN}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        {isCorrectForTextPage === "CorrectForTextPage" && (
          <div className="space-y-[60px] ">
            <p className="font-roboto  hidden md:flex md:text-stone-500">
              Онлайн тренировки для занятий дома
            </p>
          </div>
        )}
      </div>

      {/* Если пользователь авторизован, то user Блок */}
      {isAuthorizated ? (
        <div className="flex items-center" onClick={handleUserModal}>
          <svg className="h-[36px] w-[36px] mr-[10px] md:m-[16px] md:h-[50px] md:w-[50px]">
            <use xlinkHref="./public/icons/sprite.svg#icon-profile" />
          </svg>

          <div className="ml-2 flex items-center" >
            <div className="hidden md:mr-[12px] ">Сергей</div>
            <svg className="w-[8px] h-[4px] md:h-[8px] ">
              <use xlinkHref="./public/icons/sprite.svg#icon-user-arrow" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="rounded-buttonRadius bg-mainColor text-center size-[18px]  font-normal text-black hover:bg-mainHover px-[16px] py-[8px] w-[83px] h-[36px] md:px-btnX md:py-btnY md:w-[103px] md:h-[52px] md:leading-[20px]"
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
