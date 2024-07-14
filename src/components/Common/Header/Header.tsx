import { useEffect, useState } from "react";
import "../../../css/style.css";

// import UserModal from "../UserModal/UserModal";

export default function Header() {
  const [isAuthorizated, setIsAuthorizated] = useState<boolean>(false);
  const [isOpenSigninForm, setIsOpenSigninForm] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthorizated(true);
    } else {
      setIsAuthorizated(false);
    }
  }, []);

  function handleOpenSigninForm () {
    setIsOpenSigninForm(true);
  }
  // function handleUserModal = () => {
  //   setIsOpenedUserModal(prevState => !prevState);
  // };


  return (
    <div className="mx-auto mt-[50px] flex items-center justify-between">
      <div className="flex flex-col space-y-[15px]">
        <div className="">
          <a>
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="space-y-[60px]">
          <p className="font-roboto hidden md:flex">
            Онлайн тренировки для занятий дома
          </p>
        </div>
      </div>

      {!isAuthorizated && (<button className="h-[52px] w-[103px] rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover"
      onClick={handleOpenSigninForm}>
        Войти
      </button>)}

      {/* Если пользователь авторизован, то user Блок */}
       {isAuthorizated && (<div className="flex items-center ">
        <svg className="w-[50px] h-[50px] m-[16px]">
          <use xlinkHref="./public/icons/sprite.svg#icon-profile" />
        </svg>

        <div className="ml-2 flex items-center" >
          <div className="mr-[12px]">Сергей</div>
          <svg className="w-[8px] h-[8px]">
            <use xlinkHref="./public/icons/sprite.svg#icon-user-arrow" />
          </svg>
        </div>
      </div> )}
      {isOpenSigninForm && <SigninForm />}
      {/* <UserModal /> */}
    </div>
  );
}
