import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoType = {
  courseName: string;
  // CourseLogo: string[];
};
type FindCourseType = {
  courseName: string;
  imgSrc: string;
  bgColor: string;
};
export default function CourseLogo({ courseName }: CourseLogoType) {
  const findCourse: FindCourseType | undefined = courseLogoSrc.find(
    (el) => el.courseName === courseName,
  );
  return (
    <>
      <div id="CourseLogo ">
        <div className=" ">
          <div
            className={`my-l container mx-auto rounded-blockRadius bg-${findCourse!.bgColor}`}
          >
            <div className="marker p-30 mx-auto flex h-80 items-start">
              <div className="w-1/3 pr-[1000px]">
                <h2 className="p-xl m-10 whitespace-nowrap font-defaultFont text-7xl font-normal text-white">
                  {courseName}
                </h2>
              </div>
              <div className="h-full w-full ">
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
