import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

type UserModal = {
  setIsOpenedUserModal: (arg: boolean) => void,
}

export default function UserModal({ setIsOpenedUserModal }: UserModal) {
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsOpenedUserModal(false)
  };

  return (
    <div className="bg-whit absolute right-0 top-16 mr-[140px] mt-[74px] grid gap-[34px] rounded-blockRadius p-l text-center shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
      <div>
        <div>Сергей</div>
        <div>sergey.petrov96@mail.ru</div>
      </div>
      <Link to={appRoutes.USER_PROFILE}>
        <button className="h-[52px] w-[206px] rounded-buttonRadius bg-mainColor font-defaultFont font-normal hover:bg-mainHover">
          Мой профиль
        </button>
      </Link>
      <Link to={appRoutes.MAIN}>
      <button className="h-[52px] w-[206px] rounded-buttonRadius border-[1px] border-solid border-black bg-white px-btnX py-btnY font-defaultFont font-normal text-black hover:bg-bgColor" onClick={handleLogout}>
        Выйти
      </button>
      </Link>
    </div>
  );
}