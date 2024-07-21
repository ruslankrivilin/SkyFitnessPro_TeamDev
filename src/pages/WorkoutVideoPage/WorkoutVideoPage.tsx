import Header from "../../components/Common/Header/Header";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import { useState } from "react";

export default function WorkoutVideoPage() {
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div className="flex-start mt-[20px] flex flex-col">
        <h1 className="mb-[24px] text-[60px] font-medium">Йога</h1>
        <p className="mb-[40px] w-[800px] border-b-[2px] border-black text-[32px]">
          Красота и здоровье / Йога на каждый день / 2 день
        </p>
      </div>
      <div className="mb-[40px] flex items-center justify-center bg-gray-100">
        <div className="aspect-w-16 aspect-h-9 relative max-h-[639px] w-full max-w-[1160px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="left-0 top-0 h-[639px] w-full"
            src="https://cdn.pixabay.com/video/2023/01/27/148212-793717957_large.mp4"
            title="Vidio training"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Exercises setIsOpenedMyProgress={setIsOpenedMyProgress} />
      {isOpenedMyProgress && (
        <MyProgressModal setIsOpenedMyProgress={setIsOpenedMyProgress} />
      )}
    </>
  );
}
