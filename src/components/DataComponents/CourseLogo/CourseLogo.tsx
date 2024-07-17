import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoType = {
  courseName: string;
  // CourseLogo: string[];
}
type FindCourseType = {
  courseName: string,
  imgSrc: string,
  bgColor: string,
}
export default function CourseLogo({courseName}:CourseLogoType) {
const findCourse: FindCourseType | undefined = courseLogoSrc.find((el) => el.courseName === courseName)
  return (
    <>
      <div id="CourseLogo ">
        <div className="py-l">
          <div className={`my-l container mx-auto rounded-blockRadius bg-${findCourse!.bgColor}`}>
            <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
              <h2 className="w-max p-xl font-defaultFont text-7xl font-normal text-white">
                {courseName}
              </h2>
              <div className="h-full w-full pl-[650px]">
                <img
                  className="h-full object-contain object-center"
                  src={findCourse!.imgSrc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
