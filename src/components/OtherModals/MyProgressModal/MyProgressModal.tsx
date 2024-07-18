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

export default function MyProgressModal() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [inputs, setInputs] = useState<{ [key: number]: string }>({});

  function handleClickSaveProgress() {
    const allInputsFilled = testArr.every(
      (el) =>
        inputs[el.id]?.trim() !== "" &&
        testArr.length === Object.keys(inputs).length,
    );
    if (allInputsFilled) {
      setIsSuccess(!isSuccess);
    } else {
      alert("Заполните все поля.");
      /*  URL.then((response) => setSaveProgress(!isSuccess)) */
    }
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
  ): void => {
    const { value } = e.target;
    const updatedValue = Number(value) > 100 ? "100" : value;
    setInputs({
      ...inputs,
      [id]: updatedValue,
    });
  };

  console.log(inputs);

  return (
    <div className="flex-col justify-center rounded-3xl bg-white">
      <div className="w-[426px] p-[40px]">
        <div>
          <h1 className="mb-[48px] flex justify-start text-3xl">
            Мой прогресс
          </h1>
        </div>
        <div className="overflow-hidden scroll-smooth">
          <div className="h-[364px] overflow-y-scroll scroll-smooth">
            {testArr.map((el) => (
              <div key={el.id} className="mr-[20px]">
                <p className="mb-[10px] rounded-xl text-lg">{el.title}</p>
                <label>
                  <input
                    value={inputs[el.id] || ""}
                    onChange={(e) => handleInputChange(e, el.id)}
                    className="border-colorBorderBtn mb-[20px] h-[48px] w-[288px] rounded-lg border-[1px] p-[20px] text-lg opacity-75"
                    type="number"
                    placeholder="Enter a number (0-100)"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex content-center items-center justify-center">
          <button
            onClick={handleClickSaveProgress}
            className="mt-[24px] rounded-3xl bg-mainColor hover:bg-mainHover"
          >
            <p className="text-l mx-[128px] my-[16px]">Сохранить</p>
          </button>
        </div>
      </div>
    </div>
  );
}
