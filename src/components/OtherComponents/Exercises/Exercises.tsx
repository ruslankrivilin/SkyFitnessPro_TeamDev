import "../../../css/style.css";

type Exercises = {
  setIsOpenedMyProgress: (arg: boolean) => void;
  workoutProgress: { id: number; info: string; progress: number }[];
  workoutNumber: string;
};

export default function Exercises({
  setIsOpenedMyProgress,
  workoutProgress,
  workoutNumber,
}: Exercises) {
  function handleClick() {
    setIsOpenedMyProgress(true);
  }

  return (
    <div className="rounded-[30px] bg-white p-[40px] shadow-blockShadow">
      <h1 className="mb-[20px] text-[32px]">
        Упражнения тренировки {workoutNumber}
      </h1>
      <div className="mb-[40px] grid grid-cols-1 gap-x-[60px] gap-y-[24px] md:grid-cols-3 md:gap-y-[20px]">
        {workoutProgress.map((item, itemIndex) => (
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
        className="rounded-[30px] bg-mainColor text-[18px]"
      >
        <p className="mx-[37px] my-[16px]">Заполнить свой прогресс</p>
      </button>
    </div>
  );
}
