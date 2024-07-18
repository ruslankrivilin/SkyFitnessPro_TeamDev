// import { useState } from "react";
// import CourseCard from "../../components/Common/CourseCard/CourseCard";
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

  return (
    <>
      <div className="">
        <Header page={page} />
        <div className="md:mb-[50px] md:mt-[60px] flex items-center justify-between">
          <h1 className="font-medium leading-normal  pr[32px] text-[32px]     md:text-pretty md:text-[60px] h-[120px] inline-block align-middle text-left">
            Начните заниматься спортом  и улучшите качество жизни
          </h1>
          <div className="hidden md:flex flex-col items-center">
            <div className=" rounded-[5px] bg-mainColor px-[16px] py-[20px] text-[32px] font-normal leading-[35px] w-[288px]">
              Измени своё <br/> тело за полгода!
            </div>
            <svg className="absolute mt-[95px] h-[36px] w-[31px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
          {/* {courses?.map(() => <CourseCard courseName={courses.nameEN} totalProgress={} isMainPage={true}/>)} */}
        </div>
        <div className="justify-end flex md:justify-center">
          <div
            className="rounded-buttonRadius bg-mainColor text-center font-defaultFont font-normal text-black hover:bg-mainHover px-btnX py-btnY mt-[24px] mb-[29px] md: mt-[34px] mb-[81px] flex justify-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Наверх ↑
          </div>
        </div>
      </div>
    </>
  );
}
