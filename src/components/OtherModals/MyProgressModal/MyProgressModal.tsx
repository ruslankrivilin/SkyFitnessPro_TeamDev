import { useState } from "react";
import "../../../css/style.css";

export default function MyProgressModal() {
  const testArr = [
    { id: 1, title: "Сколько раз вы сделали наклоны вперед?" },
    { id: 2, title: "Сколько раз вы сделали наклоны назад?" },
    {
      id: 3,
      title: "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
    },
    { id: 4, title: "Сколько раз вы сделали приседаний?" },
  ];

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  function handleClickSaveProgress() {
    setIsSuccess(!isSuccess);
    /*  URL.then((response) => setSaveProgress(!isSuccess)) */
  }

  const [inputValue, setInputValue] = useState<number | string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);

    if (!isNaN(numberValue) && numberValue <= 100) {
      setInputValue(numberValue);
    } else if (value === "") {
      setInputValue("");
    }
  };

  return (
    <div className="h-[596px] w-[426px] flex-col justify-center rounded-3xl bg-white">
      <div className="w-[384px] p-[40px]">
        <div>
          <h1 className="mb-[48px] flex justify-start text-3xl">
            Мой прогресс
          </h1>
        </div>
        <div className="h-[364px] overflow-hidden scroll-smooth">
          <div className="h-[364px] overflow-y-scroll scroll-smooth">
            {testArr.map((el) => (
              <div key={el.id}>
                <p className="mb-[10px] rounded-xl">{el.title}</p>
                <label>
                  <input
                    className="border-colorBorderBtn mb-[20px] h-[48px] w-[288px] rounded-lg border-[1px] p-[20px] text-lg"
                    type="number"
                    placeholder="Enter a number (0-100)"
                    name={`progressInput${el.id}`}
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex content-center items-center justify-center">
          <button
            onClick={handleClickSaveProgress}
            className="mt-[24px] h-[48px] w-[288px] rounded-3xl bg-mainColor"
          >
            <p className="text-l">Сохранить</p>
          </button>
        </div>
      </div>
    </div>
  );
}
