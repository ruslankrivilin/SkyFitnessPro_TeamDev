import Header from "../../components/Common/Header/Header";
import { useParams } from "react-router-dom";
import CourseLogo from "../../components/DataComponents/CourseLogo/CourseLogo";
import Directions from "../../components/DataComponents/Directions/Directions";
import FittingText from "../../components/DataComponents/FittingText/FittingTexts";
import CallText from "../../components/OtherComponents/CallText/CallText";
import LowStartMan from "../../components/OtherComponents/LowStartMan/LowStartMan";
import { useCourses } from "../../hooks/useCourses";
// import { useCourses } from "../../hooks/useCourses";

export default function CoursePage() {
  const { id } = useParams();
  const { courses } = useCourses();
  
  // const { courses, setCourses } = useCourses();
  const courseData = courses.find((el) => el._id === id);
  return (
    <>
      <div className="md: container mx-auto flex flex-col">
        <Header page={"CorrectForTextPage"} />
        <CourseLogo courseName={"Бодифлекс"} />
        <FittingText fittings={courseData.fitting} />
        <div className="relative">
          <Directions directions={courseData.directions} />
          <LowStartMan />
          <CallText />
        </div>
      </div>
    </>
  );
}
