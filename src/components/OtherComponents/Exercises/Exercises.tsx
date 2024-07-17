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
    { id: 4, info: "Поднятие ног, согнутых в коленях", progress: 63 },
    { id: 5, info: "Наклоны вперед", progress: 42 },
    { id: 6, info: "Наклоны назад", progress: 93 },
    { id: 7, info: "Поднятие ног, согнутых в коленях", progress: 12 },
    { id: 8, info: "Наклоны вперед", progress: 21 },
    { id: 9, info: "Поднятие ног, согнутых в коленях", progress: 23 },
  ];

  const columns = [];

  for (let i = 0; i < testArr.length; i += 3) {
    columns.push(testArr.slice(i, i + 3));
  }

  return (
    <div className="mt-[40px] flex rounded-3xl bg-white">
      <div className="p-[40px]">
        <h1 className="mb-[20px] text-3xl">Упражнения тренировки 2</h1>
        <div className="mb-[40px] flex flex-row justify-between">
          {columns.map((column, columnIndex) => (
            <div className="mb-[20px]" key={columnIndex}>
              {column.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col justify-between">
                  <p className="mb-[10px] h-[20px] w-[320px]">
                    {item.info} {item.progress}%
                  </p>
                  <progress
                    className="mb-[20px] h-[6px] w-[288px]"
                    value={item.progress}
                    max="100"
                  ></progress>
                </div>
              ))}
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
