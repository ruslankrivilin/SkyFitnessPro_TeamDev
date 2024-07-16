import { useState } from "react";
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

  return (
    <>
      <div className="">
        <Header page={page} />
        <div className="mb-[50px] mt-[60px] flex items-center justify-between">
          <h1 className="inline-block text-[60px] font-medium leading-[60px]">
            Начните заниматься спортом <br /> и улучшите качество жизни
          </h1>
          <div className="flex flex-col items-center">
            <div className="bg-lime gap-[10px] rounded-[5px] bg-mainColor px-[16px] py-[20px] text-[32px] font-normal leading-[35px]">
              Измени своё <br /> тело за полгода!
            </div>
            <svg className="absolute mt-[98px] h-[36px] w-[31px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
          {/* {courses?.map(() => <CourseCard courseName={courses.nameEN} totalProgress={} isMainPage={true}/>)} */}
        </div>
        <div className="flex justify-center">
          <button
            className="mt-[34px] rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover"
            onClick={() => window.scrollTo(0, 0)}
          >
            Наверх ↑
          </button>
        </div>
      </div>
    </>
  );
}
