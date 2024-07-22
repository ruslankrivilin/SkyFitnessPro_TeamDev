import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoType = {
  courseName: string;
};
type CourseType = {
  courseName: string;
  imgSrc: string;
  imgSrcHD: string;
  bgColor: string;
};
export default function CourseLogo({ courseName }: CourseLogoType) {
  const matchedCourse: CourseType | undefined = courseLogoSrc.find(
    (el) => el.courseName === courseName,
  );
  return (
    <>
      <div
        className={`rounded-blockRadius container mx-auto h-[389px] bg-${matchedCourse!.bgColor} md:my-l0`}
      >
        <div className="marker p-30 mx-auto flex h-80 items-start">
          <div className="hidden md:block md:w-1/3 md:pr-[800px]">
            <h2 className="p-xl m-10 whitespace-nowrap font-defaultFont text-7xl font-normal text-white">
              {courseName}
            </h2>
          </div>
          <div
            className={`relative h-full w-full bg-[${matchedCourse!.imgSrcHD}]`}
          >
            <img
              className="rounded-blockRadius absolute top-[70px] ml-auto mr-auto h-full object-contain object-center"
              src={matchedCourse!.imgSrc}
            />
          </div>
        </div>
      </div>
    </>
  );
}
