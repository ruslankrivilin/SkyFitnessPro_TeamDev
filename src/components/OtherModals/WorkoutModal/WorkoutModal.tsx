import { useState } from "react";
import "../../../css/style.css";
const testArr = [
  {
    title: "Утренняя практика",
    description: "Йога на каждый день",
    day: 1,
    progress: 100,
  },
  {
    title: "Красота и здоровье",
    description: "Йога на каждый день",
    day: 2,
    progress: 100,
  },
  {
    title: "Асаны стоя",
    description: "Йога на каждый день",
    day: 3,
    progress: 34,
  },
  {
    title: "Растягиваем мышцы бедра",
    description: "Йога на каждый день",
    day: 4,
    progress: 65,
  },
  {
    title: "Гибкость спины",
    description: "Йога на каждый день",
    day: 5,
    progress: 70,
  },
  {
    title: "Гибкость рук",
    description: "Йога на каждый день",
    day: 6,
    progress: 43,
  },
  {
    title: "Сальто назад",
    description: "Йога на каждый день",
    day: 7,
    progress: 10,
  },
];

type typeSetTrain = {
  title: string;
  description: string;
  day: number;
  progress: number;
};

export default function WorkoutModal() {
  const [training, setTraining] = useState<number | null>(null);
  /*  const {courses, setCourses} = useCourses */

  function handleSelectTraining(id: number, el: typeSetTrain) {
    setTraining(id);
    console.log(el);
  }

  function handleClickStart() {
    console.log("work");
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex w-[343px] justify-center rounded-[30px] bg-white p-[30px] shadow-blockShadow sm:w-[460px] sm:p-[40px]">
        <div>
          <div className="mb-[34px] w-[283px] sm:mb-[48px] sm:w-[346px]">
            <h1 className="text-[32px]">Выберите тренировку</h1>
          </div>
          <div>
            <div className="w-[283px] overflow-hidden scroll-smooth sm:w-auto">
              <div className="h-[314px] overflow-y-scroll scroll-smooth sm:h-[354px]">
                {testArr.map((el, index) => (
                  <div
                    key={index}
                    className="pb-[8px] sm:mb-[20px] sm:h-[54px]"
                  >
                    {el.progress === 100 ? (
                      <div className="pointer-events-none flex content-center items-center justify-start border-b-[1px] border-underLineColor sm:mb-[20px]">
                        <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                          <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                        </svg>
                        <div className="mr-[10px] sm:mb-[10px]">
                          <p className="text-[18px] text-zinc-500 sm:text-[24px]">
                            {el.title}
                          </p>
                          <p className="text-[14px] text-zinc-500 sm:text-[18px]">
                            {el.description} / {el.day} день
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleSelectTraining(index, el)}
                        className="border-b-[1px] border-underLineColor sm:mb-[20px]"
                      >
                        <div
                          className={`flex cursor-pointer content-center items-center justify-start ${training === index && `rounded-[8px] border-[2px] border-mainColor`}`}
                        >
                          <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                            <use xlinkHref="/public/icons/sprite.svg#icon-not-done" />
                          </svg>
                          <div className="mr-[10px] sm:mb-[10px]">
                            <p className="text-[18px] sm:text-[24px]">
                              {el.title}
                            </p>
                            <p className="text-[14px] sm:text-[18px]">
                              {el.description} / {el.day} день
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[34px] flex content-center items-center justify-center">
              <button
                className="block w-full rounded-[30px] bg-mainColor text-[18px] hover:bg-mainHover"
                disabled={training === null && true}
                onClick={handleClickStart}
              >
                <p className="my-[16px]">Начать</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
