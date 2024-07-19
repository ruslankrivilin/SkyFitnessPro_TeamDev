type FitttingType = {
  fittings: string[];
};

export default function FittingText({ fittings }: FitttingType) {
  return (
    <div className="container mx-auto my-16 flex flex-col">
      <p className="text-lg md: pb-10 text-5xl  font-bold">
        Подойдет для вас, если:
      </p>
      <div className="align-items-center container mx-auto flex">
        {fittings.map((fitting) => (
          <div className="w-4/12 p-2.5">
            <div className="items-centr flex h-36 rounded-blockRadius bg-black">
              <div className="flex items-center p-5">
                <h2 className="pr-5 text-7xl font-medium text-mainColor">
                  {fittings.indexOf(fitting)}
                </h2>
                <h2 className="text-2xl font-normal text-white">{fitting}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
