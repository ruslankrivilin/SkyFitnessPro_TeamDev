
type UserForm = {
  aa: (arg: boolean) => void,
}

export default function UserProfilePage({ aa }: UserForm) {

  // const { email } = signin((state) => state.user); логику не пойму как завязать + handleLogout вместо аа нужно завязывать с хедером или как

  const handleChangePassword = () => {
    console.log()
  };

  const handleLogout = async () => {
    console.log(handleLogout)
    setTimeout(() => {
      aa(false)
    }, 3000)
  };

  return (
    <>
      <h2
        data-tid="titleProfile"
        className="text-[40px] sm:text-[26px] md:text-[32px] sm:mx-4 md:mx-4 font-semibold leading-[44px]"
      >
        Профиль
      </h2>
      <div
        data-tid="profileUserInfoBlock"
        className="bg-white-base mt-10 sm:mt-6 md:mt-6 sm:mx-4 md:mx-4 h-[257px] sm:h-auto p-[30px] rounded-[30px] shadow-xl"
      >
        <div
          data-tid="contentBlock"
          className="flex flex-row gap-[30px] md:gap-6 "
        >
          {/* фото юзера что поставить */}
          <img className="sm:w-[141px] sm:h-[141px]" src="/img/icon/photo_user.svg" alt="photo_user" />
          <div
            data-tid="userData"
            className="flex flex-col gap-[10px] "
          >
            <h3 className="text-[32px] sm:text-[26px] font-medium leading-[35px]">
              {"Email"?.split("@")[0]}
            </h3>
            <div className="mt-3 text-[18px] font-normal leading-[19px]">
              Логин: {"email"}
            </div>
            <div className="text-[18px] font-normal leading-[19px] ">
              Пароль: {"passworrd"}
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
    </>
  );
}
