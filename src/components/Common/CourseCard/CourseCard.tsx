import { useState } from "react";
import "../../../css/style.css";
import { courseLogoSrc } from "../../../lib/courseSettings";

const objCard = [
  { id: 1, courseName: "Йога", totalProgress: 40 },
  { id: 2, courseName: "Стретчинг", totalProgress: 0 },
  { id: 3, courseName: "Зумба", totalProgress: 100 },
];

export default function CourseCard() {
  const [showTooltip, setShowTooltip] = useState(false);
  const isMainPage = true;

  function setImg(courseName: string) {
    if (courseName === "Йога") {
      return courseLogoSrc.Yoga.imgSrc;
    } else if (courseName === "Стретчинг") {
      return courseLogoSrc.Stretching.imgSrc;
    } else {
      return courseLogoSrc.Zumba.imgSrc;
    }
  }

  return (
    <>
      <p className="text-#000000 mb-[40px] text-3xl font-semibold">Мои курсы</p>
      <div className="flex justify-between">
        {objCard.map((el, index) => (
          <div className={`rounded-3xl bg-white`} key={index}>
            <div className="relative mb-[24px]">
              <img
                className="rounded-3xl object-contain"
                src={`/images/images_small/${setImg(el.courseName)}`}
                alt=""
              />
              <div className="absolute right-0 top-0">
                {isMainPage ? (
                  <div
                    className="relative inline-block cursor-pointer"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <svg className="m-[20px] h-[32px] w-[32px]">
                      <use xlinkHref="/public/icons/sprite.svg#icon-plus" />
                    </svg>
                    {showTooltip && (
                      <span className="absolute bottom-[125%] ml-[64px] whitespace-nowrap rounded-[25px] bg-mainHover p-[10px] pl-[20px] pr-[20px] text-center text-black">
                        добавить курс
                      </span>
                    )}
                  </div>
                ) : (
                  <div
                    className="relative inline-block cursor-pointer"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <svg className="m-[20px] h-[32px] w-[32px]">
                      <use xlinkHref="/public/icons/sprite.svg#icon-minus" />
                    </svg>
                    {showTooltip && (
                      <span className="absolute bottom-[125%] ml-[64px] whitespace-nowrap rounded-[25px] bg-mainHover p-[10px] pl-[20px] pr-[20px] text-center text-black">
                        удалить курс
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

                {isMainPage && (
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
                )}
              </div>
              {isMainPage && (
                <button className="text-l mb-[15px] flex content-center items-center justify-center rounded-3xl bg-mainColor hover:bg-mainHover">
                  <h2 className="mx-[68px] my-[16px]">
                    {el.totalProgress === 0 && "Начать тренировку"}
                    {el.totalProgress === 100 && "Начать заново"}
                    {el.totalProgress > 0 &&
                      el.totalProgress !== 100 &&
                      "Продолжить"}
                  </h2>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
