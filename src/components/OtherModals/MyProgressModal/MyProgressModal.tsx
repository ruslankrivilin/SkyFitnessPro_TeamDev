import { ChangeEvent, useState } from "react";
import "../../../css/style.css";

interface TestItem {
  id: number;
  title: string;
}

const testArr: TestItem[] = [
  { id: 1, title: "Сколько раз вы сделали наклоны вперед?" },
  { id: 2, title: "Сколько раз вы сделали наклоны назад?" },
  {
    id: 3,
    title: "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
  },
  { id: 4, title: "Сколько раз вы сделали приседаний?" },
];

type MyProgress = {
  setIsOpenedMyProgress: (arg: boolean) => void;
};

export default function MyProgressModal({ setIsOpenedMyProgress }: MyProgress) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [progressData, setProgressData] = useState<{ [key: number]: string }>(
    {},
  );

  function handleClickSaveProgress() {
    const allInputsFilled = testArr.every(
      (el) =>
        progressData[el.id]?.trim() !== "" &&
        testArr.length === Object.keys(progressData).length,
    );

    if (allInputsFilled) {
      setIsSuccess(true);
    } else {
      alert("Заполните все поля.");
      /*  URL.then((response) => setSaveProgress(!isSuccess)) */
    }

    setTimeout(() => {
      setIsOpenedMyProgress(false);
      setIsSuccess(false);
    }, 2000);
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
  ): void => {
    const { value } = e.target;
    const updatedValue = Number(value) > 100 ? "100" : value;
    setProgressData({
      ...progressData,
      [id]: updatedValue,
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-20">
      <div className="flex-col justify-center rounded-[30px] bg-white">
        {isSuccess ? (
          <>
            <div className="flex w-[426px] flex-col items-center justify-center p-[40px]">
              <h1 className="mb-[34px] text-center text-[40px]">
                Ваш прогресс засчитан!
              </h1>
              <svg className="h-[68px] w-[68px]">
                <use xlinkHref="/public/icons/sprite.svg#icon-done" />
              </svg>
            </div>
          </>
        ) : (
          <div className="w-[426px] p-[40px]">
            <div>
              <h1 className="mb-[48px] flex justify-start text-[32px]">
                Мой прогресс
              </h1>
            </div>
            <div className="overflow-hidden scroll-smooth">
              <div className="h-[364px] overflow-y-scroll scroll-smooth">
                {testArr.map((el) => (
                  <div key={el.id} className="mr-[20px]">
                    <p className="mb-[10px] rounded-xl text-[18px]">
                      {el.title}
                    </p>
                    <input
                      value={progressData[el.id] || ""}
                      onChange={(e) => handleInputChange(e, el.id)}
                      className="border-colorBorderBtn mb-[20px] h-[48px] w-[288px] rounded-lg border-[1px] p-[20px] text-[18px] opacity-75"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex content-center items-center justify-center">
              <button
                onClick={handleClickSaveProgress}
                className="mt-[24px] block w-full rounded-[30px] bg-mainColor text-[18px] hover:bg-mainHover"
              >
                <p className="mx-[128px] my-[16px]">Сохранить</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
