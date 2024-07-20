import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import UserModal from "../../components/Common/UserModal/UserModal";

type UserForm = {
  aa: (arg: boolean) => void,
}

export default function UserProfilePage({ aa }: UserForm) {

  const [isOpenedUserModal, setIsOpenedUserModal] = useState<boolean>(false);
 
  const handleChangePassword = () => {
    console.log()
  };

  const handleLogout = async () => {
    console.log(handleLogout)
    setTimeout(() => {
      aa(false)
    }, 3000)
  };

  // const [passwordData, setpasswordData] = useState({ password: "", repeatPassword: "" });

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setpasswordData({ 
  //     ...passwordData, 
  //     [name]: value })
  // }

  function handleUserModal() {
    setIsOpenedUserModal((prevState) => !prevState);
  }

  return (
    <>
      <div className="bg-blackout h-screen">
        <div className="flex justify-between">
          <div className="flex">
            <Link to={appRoutes.MAIN}>
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
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
        </div>
        {isOpenedUserModal && <UserModal setIsOpenedUserModal={setIsOpenedUserModal} />}
        <h2
          data-tid="titleProfile"
          className="mb-10 text-[40px] sm:text-[26px] md:text-[32px] sm:mx-4 md:mx-4 font-semibold leading-[44px]"
        >
          Профиль
        </h2>
        <div
          data-tid="profileUserInfoBlock"
          className="mb-10 bg-white-base mt-10 sm:mt-6 md:mt-6 sm:mx-4 md:mx-4 h-[257px] sm:h-auto p-[30px] rounded-[30px] shadow-xl"
        >
          <div
            data-tid="contentBlock"
            className="flex flex-row gap-[30px] md:gap-6 "
          >
            <img className="sm:w-[197px] sm:h-[197px]" src="/images/icon-profile-nophoto.png" alt="photo_user" />
            <div
              data-tid="userData"
              className="flex flex-col gap-[10px] "
            >
              <h3 className="text-[32px] sm:text-[26px] font-medium leading-[35px]">
                {"Email"?.split("@")[0]}
              </h3>
              <div className="mt-3 text-[18px] font-normal leading-[19px]">
                Логин: 
              </div>
              <div className="text-[18px] font-normal leading-[19px] ">
                Пароль: 
              </div>
              <div className="mt-5 w-[394px] sm:w-[283px] md:w-[350px] flex flex-row gap-[10px] sm:items-center">
                <button
                  onClick={handleChangePassword}
                  className="w-[192px] sm:h-[50px] rounded-buttonRadius  bg-mainColor hover:bg-mainHover active:bg-black"
                >
                  Изменить пароль
                </button>
                <button
                  onClick={handleLogout}
                  className="w-[192px] sm:h-[50px] rounded-buttonRadius 
                text-[18px] font-normal leading-[19.8px] 
                border hover:bg-bgColor active:bg-blackout border-zinc-900"
                >
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2
          data-tid="titleProfile"
          className="mb-2 text-[40px] sm:text-[26px] md:text-[32px] sm:mx-4 md:mx-4 font-semibold leading-[44px]"
        >
          Мои курсы
        </h2>
        <div className="mb-10 gap-x-16">
          <div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-10">
            
          </div>
        </div>
      </div>
    </>
  );
}
