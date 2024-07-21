
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import UserProfile from "../../components/OtherComponents/UserProfile/UserProfile";



export default function UserProfilePage() {
  const navigate = useNavigate();
  const [isOpenedEmailForm, setIsOpenedUserProfile] = useState<boolean>(false);

 
  
  function handleChangePassword() {
    setIsOpenedUserProfile(true);
    
  }

  // const handleLogout = async () => {
  //   console.log(handleLogout)
  //   setTimeout(() => {
  //     aa(false)
  //   }, 3000)
  // };
// const [isOpenedHeader, setIsOpenedHeader] = useState<boolean>(false);
  // function handleLogout() {
  //   setIsOpenedHeader(true);
  // }

  function handleLogout() {
    navigate(appRoutes.MAIN);
  }

  // const [passwordData, setpasswordData] = useState({ password: "", repeatPassword: "" });

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setpasswordData({ 
  //     ...passwordData, 
  //     [name]: value })
  // }

  

  return (
    <>
      <div className="bg-blackout h-screen">
        <Header page={""}/>
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
                  {/* {isOpenedEmailForm ? "Сохранить" : "Изменить пароль"} */}
                </button>
      {isOpenedEmailForm && <UserProfile setIsOpenedUserProfile={setIsOpenedUserProfile} />}
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
          className="mb-10 ml-8 text-[40px] sm:text-[26px] md:text-[32px] font-semibold leading-[44px]">
          Мои курсы
        </h2>
        <div className="mb-10 ml-8 mr-8 gap-x-16">
          <div className="grid-cols-1 sm:grid">
            <CourseCard isMainPage={false}/>
          </div>
        </div>
      </div>
    </>
  );
}
