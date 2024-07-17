const Yoga = [
  "Йога для новичков",
  "Классическая йога",
  "Йогатерапия",
  "Кундалини-йога",
  "Хатха-йога",
  "Аштанга-йога",
];
// const StapeAirobiс = [
//   "Для начинающих",
//   "Для похудения",
//   "Для детей"
// ]

// const course = [Yoga, StapeAirobiс];

export default function Directions() {
  return (
    <div className="container mx-auto flex flex-col py-l">
      <p className="pb-10 text-5xl font-bold">Направления</p>
      <div className="container flex flex-row rounded-blockRadius bg-mainColor">
        <div className="flex w-2/6 flex-col p-l">
          <div className="items-centr flex">
            {Yoga.map((direction) => (
              <div className="flex items-center pb-8 pt-8">
                <svg className="h-6 w-6">
                  <use xlinkHref="/icons/sprite.svg#icon-star-4" />
                </svg>
                <h2 className="pl-s font-defaultFont text-2xl text-black">
                  {direction}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
