import { useState } from "react";
import MyProgressModal from "../../OtherModals/MyProgressModal/MyProgressModal";
import "../../../css/style.css";

export default function Exercises() {
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);

  function handleClick() {
    setIsOpenedMyProgress(!isOpenedMyProgress);
  }

  const testArr = [
    { id: 1, info: "Наклоны вперед", progress: 90 },
    { id: 2, info: "Наклоны назад", progress: 2 },
    { id: 3, info: "Поднятие ног, согнутых в коленях", progress: 23 },
    { id: 4, info: "Наклоны вперед", progress: 21 },
    { id: 5, info: "Наклоны вперед", progress: 42 },
    { id: 6, info: "Наклоны назад", progress: 3 },
    { id: 7, info: "Поднятие ног, согнутых в коленях", progress: 12 },
    { id: 8, info: "Поднятие ног, согнутых в коленях", progress: 63 },
    { id: 9, info: "Поднятие ног, согнутых в коленях", progress: 23 },
  ];

  return (
    <div className="mt-[40px] flex max-w-[1234px] rounded-3xl bg-white">
      <div className="p-[40px]">
        <h1 className="mb-[20px] text-3xl">Упражнения тренировки 2</h1>
        <div className="mb-[40px] flex flex-wrap justify-between">
          {testArr.map((el) => (
            <div className="mb-[20px] flex flex-col" key={el.id}>
              <p className="mb-[10px] h-[20px] w-[320px]">
                {el.info} {el.progress}%
              </p>
              <progress
                className="h-[6px] w-[288px]"
                value={el.progress}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
        {isOpenedMyProgress && <MyProgressModal />}
        <button
          onClick={handleClick}
          className="text-l mt-[8px] h-[48px] w-[288px] rounded-3xl bg-mainColor"
        >
          Заполнить свой прогресс
        </button>
      </div>
    </div>
  );
}
