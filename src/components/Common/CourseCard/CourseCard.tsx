import { useState } from "react";
import "../../../css/style.css";

const CourseData = [
  {
    id: 1,
    courseName: "Йога",
    totalProgress: 40,
    imgSrc: "/public/images/images_small/yoga_female_sm.png",
  },
  {
    id: 2,
    courseName: "Стретчинг",
    totalProgress: 0,
    imgSrc: "/public/images/images_small/stretching_female_sm.png",
  },
  {
    id: 3,
    courseName: "Зумба",
    totalProgress: 100,
    imgSrc: "/public/images/images_small/zumba_female_sm.png",
  },
];

export default function CourseCard({ isMainPage }: { isMainPage: boolean }) {
  const [courses] = useState(CourseData);
  const [showTooltips, setShowTooltips] = useState([{}]);

  const handleMouseEnter = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <div className="flex flex-wrap gap-[40px]">
        {courses.map((el, index) => (
          <div className="rounded-3xl bg-white" key={index}>
            <div className="relative mb-[24px]">
              <img
                className="rounded-3xl object-contain"
                src={el.imgSrc}
                alt=""
              />
              <div className="absolute right-0 top-0">
                {isMainPage ? (
                  <div className="relative inline-block cursor-pointer">
                    <svg
                      className="m-[20px] h-[32px] w-[32px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <use xlinkHref="/public/icons/sprite.svg#icon-plus" />
                    </svg>
                    {showTooltips[index] && (
                      <span className="absolute left-[64px] z-[9999] whitespace-nowrap rounded-[5px] border-[1px] border-black bg-white p-[6px] pl-[20px] pr-[20px] text-center text-black">
                        Добавить курс
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="relative inline-block cursor-pointer">
                    <svg
                      className="m-[20px] h-[32px] w-[32px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <use xlinkHref="/public/icons/sprite.svg#icon-minus" />
                    </svg>
                    {showTooltips[index] && (
                      <span className="absolute left-[64px] whitespace-nowrap rounded-[5px] border-[1px] border-black bg-white p-[6px] pl-[20px] pr-[20px] text-center text-black">
                        Удалить курс
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mx-[32px] flex list-none flex-col rounded-[12px]">
              <div>
                <h1 className="mb-[2px] flex flex-row text-3xl">
                  {el.courseName}
                </h1>
                <div className="mb-[2px] flex w-[288px] flex-wrap">
                  <div className="m-[6px] flex content-center items-center">
                    <svg className="m-[8px] h-[15px] w-[15px]">
                      <use xlinkHref="/public/icons/sprite.svg#icon-calendar" />
                    </svg>
                    <p className="text-base">25 дней</p>
                  </div>
                  <div className="m-[6px] flex content-center items-center">
                    <svg className="m-[8px] h-[15px] w-[15px]">
                      <use xlinkHref="/public/icons/sprite.svg#icon-clockface" />
                    </svg>
                    <p className="text-base">20-50 мин/день</p>
                  </div>
                  <div className="m-[6px] flex content-center items-center">
                    <svg className="m-[8px] h-[15px] w-[15px]">
                      <use xlinkHref="/public/icons/sprite.svg#icon-difficult-full" />
                    </svg>
                    <p className="text-base">Сложность</p>
                  </div>
                </div>

                {!isMainPage && (
                  <div>
                    <div className="mb-[40px]">
                      <p className="flex justify-start bg-bgColor text-lg">
                        Прогресс {el.totalProgress}%
                      </p>
                      <progress
                        className="inline-block h-[6px] w-[288px] appearance-none align-middle"
                        value={el.totalProgress}
                        max="100"
                      ></progress>
                    </div>
                    <button className="text-l mb-[15px] flex content-center items-center justify-center rounded-3xl bg-mainColor hover:bg-mainHover">
                      <h2 className="mx-[68px] my-[16px]">
                        {el.totalProgress === 0 && "Начать тренировку"}
                        {el.totalProgress === 100 && "Начать заново"}
                        {el.totalProgress > 0 &&
                          el.totalProgress !== 100 &&
                          "Продолжить"}
                      </h2>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
