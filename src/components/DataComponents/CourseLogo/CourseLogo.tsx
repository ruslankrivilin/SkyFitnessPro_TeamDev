import { useState } from "react";
// import { useParams } from "react-router-dom";

export default function CourseLogo() {
  // const { id } = useParams();
  // const { cards, setCards } = useTasks();
  // const currentCourse = cards.find((card) => id === card._id);
  const [
    isSelected,
    // setIsSelected
  ] = useState<boolean>(false);
  return (
    <>
      {/* <button onClick={() => setIsSelected(false)}
          className="h-[52px] w-[206px] rounded-buttonRadius border-[1px] border-solid border-black bg-white px-btnX py-btnY font-defaultFont font-normal text-black hover:bg-bgColor">
        Выбрать курс</button> */}
      <div id="CourseLogo ">
        <div className="py-l" id="ab1c3f">
          <div className="my-l container mx-auto rounded-blockRadius bg-yogaColor">
            <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
              <h2 className="p-xl font-defaultFont text-7xl font-normal text-white">
                Йога
              </h2>
              <div className="h-full w-full pl-[650px]">
                <img
                  className="h-full object-contain object-center"
                  src="/images/images_small/yoga_female_sm.png"
                />
              </div>
            </div>
          </div>
        </div>
        {isSelected && (
          <div className="py-l" id="kfpq8e">
            <div className="my-l container mx-auto rounded-blockRadius bg-stretchingColor">
              <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
                <h2 className="p-xl font-defaultFont text-7xl font-normal text-white">
                  Стретчинг
                </h2>
                <div className="h-full w-full pl-[500px]">
                  <img
                    className="h-full w-full object-contain object-center"
                    src="/images/images_small/stretching_female_sm.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {isSelected && (
          <div className="py-l" id="ypox9r">
            <div className="my-l container mx-auto rounded-blockRadius bg-zumbaColor">
              <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
                <h2 className="p-xl font-defaultFont text-7xl font-normal text-white">
                  Зумба
                </h2>
                <div className="h-full w-full pl-[600px]">
                  <img
                    className="h-full object-contain object-center"
                    src="/images/images_small/zumba_female_sm.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {isSelected && (
          <div className="py-l" id="6i67sm">
            <div className="my-l container mx-auto rounded-blockRadius bg-stepAerobicColor">
              <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
                <div className="w-[419px]">
                  <h2 className="w-max p-xl font-defaultFont text-7xl font-normal text-white">
                    Степ-аэробика
                  </h2>
                </div>
                <div className="h-full w-full pl-[450px]">
                  <img
                    className="h-full object-contain object-center"
                    src="/images/images_small/step_aerobic_sm.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {isSelected && (
          <div className="py-l" id="q02a6i">
            <div className="my-l container mx-auto rounded-blockRadius bg-bodyFlexColor">
              <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
                <h2 className="p-xl font-defaultFont text-7xl font-normal text-white">
                  Бодифлекс
                </h2>
                <div className="h-full w-full pl-[450px]">
                  <img
                    className="h-full object-contain object-center"
                    src="/images/images_small/bodyflex_female_sm.png"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
