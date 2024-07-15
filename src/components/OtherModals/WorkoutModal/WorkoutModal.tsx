import { useState } from "react";
import "../../../css/style.css";

export default function WorkoutModal() {
  type typeSetTrain = {
    title: string;
    description: string;
    day: number;
    active: string;
  };

  const testArr = [
    {
      title: "Утренняя практика",
      description: "Йога на каждый день",
      day: 1,
      active: "finish",
    },
    {
      title: "Красота и здоровье",
      description: "Йога на каждый день",
      day: 2,
      active: "finish",
    },
    {
      title: "Асаны стоя",
      description: "Йога на каждый день",
      day: 3,
      active: "start",
    },
    {
      title: "Растягиваем мышцы бедра",
      description: "Йога на каждый день",
      day: 4,
      active: "start",
    },
    {
      title: "Гибкость спины",
      description: "Йога на каждый день",
      day: 5,
      active: "start",
    },
    {
      title: "Гибкость рук",
      description: "Йога на каждый день",
      day: 6,
      active: "start",
    },
    {
      title: "Сальто назад",
      description: "Йога на каждый день",
      day: 7,
      active: "start",
    },
  ];

  const [training, setTraining] = useState<number | null>(null);

  function handleSelectTraining(id: number, el: typeSetTrain) {
    setTraining(id);
    console.log(el);
  }

  function handleClickStart() {
    console.log("work");
  }

  return (
    <div className="flex h-[608px] w-[460px] justify-center rounded-3xl bg-white">
      <div className="w-[384px] p-[40px]">
        <div>
          <h1 className="mb-[48px] flex justify-center text-3xl">
            Выберите тренировку
          </h1>
        </div>
        <div className="h-[446px]">
          <div className="mb-[34px] overflow-hidden scroll-smooth">
            <div className="h-[330px] overflow-y-scroll scroll-smooth">
              {testArr.map((el, index) => {
                return (
                  <div key={index} className="mb-[10px] h-[56px] pb-[8px]">
                    {el.active === "finish" ? (
                      <div className="border-colorBorderBtn pointer-events-none mb-[10px] flex content-center items-center justify-start border-b-[1px]">
                        <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                          <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                        </svg>
                        <div className="mr-[10px]">
                          <p className="text-lg text-zinc-500">{el.title}</p>
                          <p className="text-zinc-500">
                            {el.description} / {el.day} день
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleSelectTraining(index, el)}
                        className={`border-colorBorderBtn mb-[10px] flex cursor-pointer content-center items-center justify-start border-b-[1px]`}
                      >
                        <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                          <use
                            xlinkHref={`/public/icons/sprite.svg#${training === index ? "icon-done" : "icon-not-done"}`}
                          />
                        </svg>
                        <div className="mr-[10px]">
                          <p className="text-lg">{el.title}</p>
                          <p>
                            {el.description} / {el.day} день
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex content-center items-center justify-center">
            <button
              className="text-l h-[48px] w-[288px] rounded-3xl bg-mainColor"
              disabled={training === null && true}
              onClick={handleClickStart}
            >
              Начать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
