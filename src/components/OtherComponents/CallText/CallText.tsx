export default function CallText() {
  return (
    <div className="w-auto flex flex-col p-10  container relative">
      <h2 className="text-6xl font-medium">Начните путь <br/>к новому телу</h2>
      {/* <div> */}
      <ul className="text-2xl font-normal list-disc py-l p-10">
        <li>проработка всех групп мышц</li>
        <li>тренировка суставов</li>
        <li>улучшение циркуляции крови</li>
        <li>упражнения заряжают бодростью</li>
        <li>помогают противостоять стрессам</li>
      </ul>
      {/* </div> */}
      <button className="py-inptY w-[100%] rounded-buttonRadius bg-mainColor font-defaultFont font-normal hover:bg-mainHover">
      Войдите, чтобы добавить курс
      </button>
    </div>
  );
}
