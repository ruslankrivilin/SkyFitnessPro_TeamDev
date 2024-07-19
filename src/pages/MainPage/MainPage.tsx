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
        <div className=" flex items-center justify-between mdSc:mb-[60px]">
          <h1 className="font-medium leading-normal text-[32px] inline-block align-middle text-left mdSc:text-pretty mdSc:text-[60px] ">
            Начните заниматься спортом  и улучшите качество жизни
          </h1>
          <div className="hidden md:flex flex-col items-center">
            <div className="rounded-[5px] bg-mainColor px-[16px] py-[20px] text-[32px] font-normal leading-[35px] mdSc:w-[288px]">
              Измени своё <br/> тело за полгода!
            </div>
            <svg className="absolute mt-[95px] h-[36px] w-[31px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
          {/* {courses?.map(() => <CourseCard courseName={courses.nameEN} totalProgress={} isMainPage={true}/>)} */}
        </div>
        <div className="justify-end flex mdSc:justify-center">
          <div
            className="rounded-buttonRadius bg-mainColor text-center font-defaultFont font-normal text-black hover:bg-mainHover px-btnX py-btnY mt-[24px] mb-[29px] mdSc:mt-[34px] mdSc:mb-[81px] mdSc:flex justify-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Наверх ↑
          </div>
        </div>
      </div>
    </>
  );
}
