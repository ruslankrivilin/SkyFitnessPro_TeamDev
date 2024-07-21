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
    progress: 12,
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
    progress: 100,
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
    progress: 100,
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
    <div className="flex w-[460px] justify-center rounded-[30px] bg-white p-[40px] shadow-blockShadow shadow-gray-400">
      <div className="w-[380px]">
        <div>
          <h1 className="mb-[48px] flex justify-center text-[32px]">
            Выберите тренировку
          </h1>
        </div>
        <div>
          <div className="overflow-hidden scroll-smooth">
            <div className="h-[354px] overflow-y-scroll scroll-smooth">
              {testArr.map((el, index) => (
                <div key={index} className="mb-[20px] h-[54px] pb-[8px]">
                  {el.progress === 100 ? (
                    <div className="border-underLineColor pointer-events-none mb-[20px] flex content-center items-center justify-start border-b-[1px]">
                      <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                        <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                      </svg>
                      <div className="mb-[10px] mr-[10px]">
                        <p className="text-[24px] text-zinc-500">{el.title}</p>
                        <p className="text-[18px] text-zinc-500">
                          {el.description} / {el.day} день
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* border-b-[1px] border-mainColor */
                    <div
                      onClick={() => handleSelectTraining(index, el)}
                      className={`border-underLineColor mb-[20px] flex cursor-pointer content-center items-center justify-start border-b-[1px]`}
                    >
                      <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                        <use
                          xlinkHref={`/public/icons/sprite.svg#${training === index ? "icon-done" : "icon-not-done"}`}
                        />
                      </svg>
                      <div className="mr-[10px]">
                        <p className="text-[24px]">{el.title}</p>
                        <p className="text-[18px]">
                          {el.description} / {el.day} день
                        </p>
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
              <p className="mx-[158px] my-[16px]">Начать</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
