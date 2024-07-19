// import CallText from "../CallText/CallText";

export default function LowStartMan() {
  return (
    // <div className="flex h-80 justify-around pl-96">
    <div className="w-full] ml-[450px] flex h-full justify-around pl-96">
      <div className="absolute z-20 pr-60 pt-28">
        <svg className="h-12">
          <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
        </svg>
      </div>
      <div className="absolute z-10">
        <img className=" " src="/images/images_full/low_start_man_hd.png" />
      </div>
      <div className="absolute z-0 pr-40 pt-40">
        <svg className="h-[490px] w-[770px] object-contain object-center">
          <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
        </svg>
      </div>
    </div>
    // </div>
  );
}
