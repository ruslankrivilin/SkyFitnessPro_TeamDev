import CallText from "../CallText/CallText";

export default function LowStartMan() {
  return (
    <div className="container mt-20 flex w-auto rounded-blockRadius shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
      <div className=" md:flex flex-row-reverse mx-auto rounded-blockRadius">
        
        <div className="absolut flex h-80 justify-around">
          <div className="w-full] h-full ">
            <div>
              <svg className="absolute z-20 h-12 w-12">
                <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
              </svg>
            </div>
            <div>
              <img
                className="absolute z-10"
                src="/images/images_small/low_start_man_sm.png"
              />
            </div>
            <svg className="pt-200 absolute z-0 h-[390px] w-[670px]">
              <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
            </svg>
          </div>
        </div>
        <CallText />
      </div>
    </div>
  );
}
