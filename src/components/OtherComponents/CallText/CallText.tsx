import { useEffect, useState } from "react";
import CourseCard from "../../Common/CourseCard/CourseCard";
import SigninForm from "../../Common/SigninForm/SigninForm";

export default function CallText() {
  const [isAuthorizated, setIsAuthorizated] = useState<boolean>(false);
  const [isOpenSigninForm, setIsOpenSigninForm] = useState<boolean>(false);
  const [isAddCourse, setIsAddCourse] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthorizated(true);
    } else {
      setIsAuthorizated(false);
    }
  }, []);

  function handleAddCourse() {
    setIsAddCourse(true);
  }

  function handleOpenSigninForm() {
    setIsOpenSigninForm(true);
  }

  return (
    <div className="rounded-blockRadius container absolute top-[560px] z-40 mx-auto mb-10 mt-20 flex overflow-hidden shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] md:relative">
      <div className="container relative flex flex-col p-7">
        <h2 className="text-3xl font-medium md:text-6xl">
          Начните путь <br />к новому телу
        </h2>
        <ul className="list-disc py-7 pl-7 text-lg/8 font-normal md:text-2xl">
          <li>проработка всех групп мышц</li>
          <li>тренировка суставов</li>
          <li>улучшение циркуляции крови</li>
          <li>упражнения заряжают бодростью</li>
          <li>помогают противостоять стрессам</li>
        </ul>
        <div className=" ">
          {isAuthorizated ? (
            <button
              className="w-1/3 rounded-buttonRadius bg-mainColor py-inptY font-defaultFont text-base/5 font-normal hover:bg-mainHover"
              onClick={handleAddCourse}
            >
              Добавить курс
            </button>
          ) : (
            <button
              className="w-1/3 rounded-buttonRadius bg-mainColor py-inptY font-defaultFont text-base/5 font-normal hover:bg-mainHover"
              onClick={handleOpenSigninForm}
            >
              Войдите, чтобы добавить курс
            </button>
          )}
          {isAddCourse && <CourseCard setIsAddCourse={setIsAddCourse} />}
          {isOpenSigninForm && (
            <SigninForm setIsOpenSigninForm={setIsOpenSigninForm} />
          )}
        </div>
      </div>
    </div>
  );
}
