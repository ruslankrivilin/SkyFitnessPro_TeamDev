import { useState } from "react";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";

export default function MainPage() {
  const [courses, setCourses] = useState<CourseType[]>();

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div>
          <h1 className="inline-block text-pretty text-left text-[60px] font-medium leading-[60px]">
            Начните заниматься спортом <br /> и улучшите качество жизни
          </h1>
          <div>
            <div className="mt-[180px] ml-[1011px] rounded-[5px]  bg-mainColor flex bg-lime px-[16px] py-[20px] gap-[10px] text-[32px] leading-[35px] font-normal">
              Измени своё <br /> тело за полгода!
            </div>
            <svg className="mt-[265px] ml-[1128px] w-[30px] h-[35px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
          {courses?.map(() => <CourseCard />)}
        </div>
        <div className="flex justify-center rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover">
          <button className="" onClick={() => window.scrollTo(0, 0)}>
            Наверх ↑
          </button>
        </div>
      </div>
    </>
  );
}
