

const directions1 = [
  "Йога для новичков",
  "Классическая йога",
  "Йогатерапия",
  "Кундалини-йога",
  "Хатха-йога",
  "Аштанга-йога",
];

// type DirectionsType = {
//   directions: string[];
// }

export default function Directions() {
  return (
    <div className="container mx-auto flex flex-col ">
      <p className="pb-10 text-5xl font-bold">Направления</p>
      <div className="container flex flex-row rounded-blockRadius bg-mainColor">
        <div className="flex w-2/6 flex-col p-l">
          <div className="grid grid-cols-[284px_284px_284px] gap-x-44">
            {directions1.map((direction) => (
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
