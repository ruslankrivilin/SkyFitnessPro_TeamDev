import { useState } from "react";
import "../../../css/style.css";
import { courseLogoSrc } from "../../../lib/courseLogoSrc";

type FiltersItemType = {
  courseName: string;
  totalProgress: number;
  isMainPage: boolean;
};

export default function CourseCard({
  courseName,
  totalProgress,
  isMainPage,
}: FiltersItemType) {
  const [showTooltip, setShowTooltip] = useState(false);

  function setImg() {
    if (courseName === "Йога") {
      return courseLogoSrc.Yoga;
    } else if (courseName === "Стретчинг") {
      return courseLogoSrc.Stretching;
    } else {
      return courseLogoSrc.Zumba;
    }
  }

  return (
    <>
      <div className={`rounded-3xl bg-white`}>
        <div className="relative mb-[24px]">
          <img
            className="rounded-3xl object-contain"
            src={`/images/images_small/${setImg()}`}
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
            <h1 className="mb-[2px] flex flex-row text-3xl">{courseName}</h1>
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
                  Прогресс {totalProgress}%
                </p>
                <progress
                  className="inline-block h-[6px] w-[288px] appearance-none align-middle"
                  value={totalProgress}
                  max="100"
                ></progress>
              </div>
            )}
          </div>
          {isMainPage && (
            <button className="text-l mb-[15px] flex h-[48px] w-[288px] content-center items-center justify-center rounded-3xl bg-mainColor">
              <h2>
                {totalProgress === 0 && "Начать тренировку"}
                {totalProgress === 100 && "Начать заново"}
                {totalProgress > 0 && totalProgress !== 100 && "Продолжить"}
              </h2>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
