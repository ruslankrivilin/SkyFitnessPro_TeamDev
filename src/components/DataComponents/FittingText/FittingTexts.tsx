const fittings = [
  {
    fittingNumber: 1,
    fittingText: "Хотите укрепить дыхательную и сердечно-сосудистой системы",
  },
  {
    fittingNumber: 2,
    fittingText: "Быстрый сбросить лишние килограммы",
  },
  {
    fittingNumber: 3,
    fittingText: "Улучшить настроение, повысить жизненный тонус",
  },
];

export default function FittingText() {
  return (
    <div className="container mx-auto my-14 flex flex-col">
      <p className="pb-10 text-5xl font-bold">Подойдет для вас, если:</p>

      <div className="align-items-center container mx-auto flex">
        {fittings.map((fitting) => (
          <div className="w-4/12 p-2.5">
            <div className="items-centr flex h-36 rounded-blockRadius bg-black">
              <div className="flex items-center p-5">
                <h2 className="pr-5 text-7xl font-medium text-mainColor">
                  {fitting.fittingNumber}
                </h2>
                <h2 className="text-2xl font-normal text-white">
                  {fitting.fittingText}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
