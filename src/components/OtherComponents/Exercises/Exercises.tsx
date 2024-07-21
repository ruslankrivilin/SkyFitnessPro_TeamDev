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
    { id: 2, info: "Наклоны назад", progress: 2 },
    { id: 3, info: "Поднятие ног, согнутых в коленях", progress: 23 },
    { id: 4, info: "Поднятие ног, согнутых в коленях", progress: 63 },
    { id: 5, info: "Наклоны вперед", progress: 42 },
    { id: 6, info: "Наклоны назад", progress: 93 },
    { id: 7, info: "Поднятие ног, согнутых в коленях", progress: 12 },
    { id: 8, info: "Наклоны вперед", progress: 21 },
    { id: 9, info: "Поднятие ног, согнутых в коленях", progress: 23 },
  ];

  return (
    <div className="mt-[40px] flex rounded-[30px] bg-white">
      <div className="flex flex-col p-[40px]">
        <h1 className="mb-[20px] text-[32px]">Упражнения тренировки 2</h1>
        <div className="mb-[40px] flex h-[164px] flex-col flex-wrap gap-[16px]">
          {testArr.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col gap-[10px]">
              <p className="font-roboto text-[18px] font-normal">
                {item.info} {item.progress}%
              </p>
              <progress
                className="h-[6px] w-[320px]"
                value={item.progress}
                max="100"
              ></progress>
            </div>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="text-l mt-[8px] h-[48px] w-[288px] rounded-[30px] bg-mainColor"
        >
          Заполнить свой прогресс
        </button>
      </div>
    </div>
  );
}
