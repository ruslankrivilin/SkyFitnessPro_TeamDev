import Header from "../../components/Common/Header/Header";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import { useState } from "react";

export default function WorkoutVideoPage() {
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);

  return (
    <>
      {isOpenedMyProgress && (
        <MyProgressModal setIsOpenedMyProgress={setIsOpenedMyProgress} />
      )}
      <Header />
      <Exercises setIsOpenedMyProgress={setIsOpenedMyProgress} />
    </>
  );
}
