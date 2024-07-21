import "../../../css/style.css";

type Exercises = {
  setIsOpenedMyProgress: (arg: boolean) => void;
};

export default function Exercises({ setIsOpenedMyProgress }: Exercises) {
  function handleClick() {
    setIsOpenedMyProgress(true);
  }

  const testArr = [
    { id: 1, info: "Наклоны вперед", progress: 90 },
    { id: 2, info: "Наклоны назад", progress: 100 },
    { id: 3, info: "Поднятие ног, согнутых в коленях", progress: 100 },
    { id: 4, info: "Поднятие ног, согнутых в коленях", progress: 63 },
    { id: 5, info: "Наклоны вперед", progress: 42 },
    { id: 6, info: "Наклоны назад", progress: 93 },
    { id: 7, info: "Поднятие ног, согнутых в коленях", progress: 100 },
    { id: 8, info: "Наклоны вперед", progress: 100 },
    { id: 9, info: "Поднятие ног, согнутых в коленях", progress: 23 },
  ];

  return (
    <div className="rounded-[30px] bg-white p-[40px]">
      <h1 className="mb-[20px] text-[32px]">Упражнения тренировки 2</h1>
      <div className="mb-[40px] grid grid-cols-3 gap-x-[60px] gap-y-[20px]">
        {testArr.map((item, itemIndex) => (
          <div key={itemIndex} className="flex flex-col">
            <p className="font-roboto text-[18px] font-normal">
              {item.info} {item.progress}%
            </p>
            <progress
              className="mt-[10px] block h-[6px] w-full"
              value={item.progress}
              max="100"
            ></progress>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="w-[288px] rounded-[30px] bg-mainColor py-[16px] text-[18px]"
      >
        Заполнить свой прогресс
      </button>
    </div>
  );
}
