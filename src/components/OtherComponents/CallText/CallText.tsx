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
    <div className="container relative mx-auto mb-10 mt-20 flex rounded-blockRadius shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
      <div className="container relative flex flex-col p-10">
        <h2 className="text-6xl font-medium">
          Начните путь <br />к новому телу
        </h2>
        <ul className="py-l list-disc p-10 text-2xl font-normal">
          <li>проработка всех групп мышц</li>
          <li>тренировка суставов</li>
          <li>улучшение циркуляции крови</li>
          <li>упражнения заряжают бодростью</li>
          <li>помогают противостоять стрессам</li>
        </ul>
        <div className=" ">
          {isAuthorizated ? (
            <button
              className="w-1/3 rounded-buttonRadius bg-mainColor py-inptY font-defaultFont font-normal hover:bg-mainHover"
              onClick={handleAddCourse}
            >
              Добавить курс
            </button>
          ) : (
            <button
              className="w-1/3 rounded-buttonRadius bg-mainColor py-inptY font-defaultFont font-normal hover:bg-mainHover"
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
