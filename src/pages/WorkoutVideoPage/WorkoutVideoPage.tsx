/* import Header from "../../components/Common/Header/Header"; */
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import WorkoutModal from "../../components/OtherModals/WorkoutModal/WorkoutModal";
import { useState } from "react";
/* import { useParams } from "react-router-dom"; */

export default function WorkoutVideoPage() {
  /* const {id} = useParams() */
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);

  return (
    <>
      {/* <Header /> */}
      <CourseCard isMainPage={true} />
      <WorkoutModal />
      {isOpenedMyProgress && (
        <MyProgressModal setIsOpenedMyProgress={setIsOpenedMyProgress} />
      )}
      <Exercises setIsOpenedMyProgress={setIsOpenedMyProgress} />
    </>
  );
}
