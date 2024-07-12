export default function CourseLogo() {
  return (
    <>
      <div className="py-l">
        <div className="my-l container mx-auto rounded-blockRadius bg-yogaColor">
          <div className="marker p-30 mx-auto flex h-80 items-start gap-x-32">
            <h2 className="p-xl font-defaultFont text-7xl font-normal text-white">
              Йога
            </h2>
            <div className="h-full w-full pl-[650px]">
              <img
                className="h-full object-contain object-center"
                src="/images/images_full/yoga_female_hd_slice.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
