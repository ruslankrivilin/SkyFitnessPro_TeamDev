import { useEffect, useState } from "react";
import "../../../css/style.css";
import SigninForm from "../SigninForm/SigninForm";
import UserModal from "../UserModal/UserModal";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUserData } from "../../../hooks/useUserData";


type HeaderType = {
  page: string;
};

export default function Header({ page }: HeaderType) {
  const user = useUserData()
  const [isOpenedSigninForm, setIsOpenedSigninForm] = useState<boolean>(false);
  const [isOpenedUserModal, setIsOpenedUserModal] = useState<boolean>(false);
  const [isCorrectForTextPage, setIsCorrectForTextPage] =
    useState<boolean>(true);


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
    <div className="flex justify-between relative  py-[40px] md:pb-[60px] md:pt-[50px]">
      <div className="flex flex-col ">
        <div className="flex w-[220px] h-[35px] md:mb-[15px]">
          <Link to={appRoutes.MAIN}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        {isCorrectForTextPage && (
          <div className="space-y-[60px]">
            <p className="font-roboto hidden md:flex md:text-stone-500 md:text-lg/[19.8px]">
              Онлайн тренировки для занятий дома
            </p>
          </div>
        )}
      </div>

      {/* Если пользователь авторизован, то user Блок */}
      {user ? (
        <div className="flex items-center" onClick={handleUserModal}>
          <svg className=" h-[36px] w-[36px] md:m-[16px] md:h-[42px] md:w-[42px]">
            <use xlinkHref="./public/icons/sprite.svg#icon-profile" />
          </svg>

          <div className="cursor-pointer pl-[10px] flex items-center md:m-0">
            <div className="hidden md:mr-[12px] md:text-2xl/[26px] ">Сергей</div>
            <svg className=" border-black border-solid  h-[4px] w-[15px] md:h-[15px] ">
              <use xlinkHref="./public/icons/sprite.svg#icon-user-arrow" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="cursor-pointer rounded-buttonRadius bg-mainColor  hover:bg-mainHover text-lg/[19.8px]  px-[16px] py-[8px] text-center font-normal text-black md:h-[52px] md:w-[103px] md:px-btnX md:py-btnY md:"
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