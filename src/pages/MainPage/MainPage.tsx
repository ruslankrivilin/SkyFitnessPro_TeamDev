// import { useState } from "react";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";

export default function MainPage() {
  // const [courses, setCourses] = useState<CourseType[]>();
  // const { courses, setCourses } = useCourses();
  const page = "CorrectForTextPage";

  // useEffect(() => {
  //   getCoursesApi() функция API получения курсов с базы
  //     .then((courses) => {
  //       setCourses(courses.courses);
  //
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);
  // const courseData = [
  //   {
  //     courseName: "Йога",
  //     totalProgress: 40,
  //     imgSrc: "/public/images/images_small/yoga_female_sm.png",
  //   },
  //   {
  //     courseName: "Стретчинг",
  //     totalProgress: 0,
  //     imgSrc: "/public/images/images_small/stretching_female_sm.png",
  //   },
  //   {
  //     courseName: "Зумба",
  //     totalProgress: 100,
  //     imgSrc: "/public/images/images_small/zumba_female_sm.png",
  //   },
  // ];
  return (
    <>
      <div className="">
        <Header page={page} />
        <div className="md:mb-[60px] flex items-center justify-between">
          <h1 className="inline-block text-left align-middle text-[32px] font-medium leading-normal md:text-pretty md:text-[60px]">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
          <div className="hidden flex-col items-center md:flex">
            <div className="rounded-[5px] bg-mainColor px-[16px] py-[20px] text-[32px] font-normal leading-[35px] md:w-[288px]">
              Измени своё <br /> тело за полгода!
            </div>
            <svg className="absolute mt-[95px] h-[36px] w-[31px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
          
        </div>
        <CourseCard  isMainPage={true} />
        <div className="flex justify-end md:justify-center">
          <div
            className="mb-[29px] mt-[24px] justify-center rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover md:mb-[81px] md:mt-[34px] md:flex"
            onClick={() => window.scrollTo(0, 0)}
          >
            Наверх ↑
          </div>
        </div>
      </div>
    </>
  );
}
