export default function LowStartMan() {
  return (
    <div className="absolute z-10 left-20 top-[370px] flex h-full w-full justify-around md:ml-[250px]">
      <div className="absolute right-[120px] top-[85px] z-30 md:pr-60 md:pt-28">
        <svg className="h-12 pb-2">
          <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
        </svg>
      </div>
      <div className="z-10 h-full w-full">
        <img
          className="absolute object-contain object-center"
          src="/images/images_full/low_start_man_hd.png"
        />
      </div>
      <div className="absolute right-8 top-[120px] z-0">
        <svg className="h-[370px] w-[475px] object-contain object-center md:h-[431px] md:w-[770px]">
          <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
        </svg>
      </div>
    </div>
  );
}
