import Header from "../../components/Common/Header/Header";
// import { useParams } from "react-router-dom";
import CourseLogo from "../../components/DataComponents/CourseLogo/CourseLogo";
import Directions from "../../components/DataComponents/Directions/Directions";
import FittingText from "../../components/DataComponents/FittingText/FittingTexts";
import CallText from "../../components/OtherComponents/CallText/CallText";
import LowStartMan from "../../components/OtherComponents/LowStartMan/LowStartMan";
// import { useCourses } from "../../hooks/useCourses";

const directions = [
  "Йога для новичков",
  "Классическая йога",
  "Йогатерапия",
  "Кундалини-йога",
  "Хатха-йога",
  "Аштанга-йога",
];

const fittings = [
  "Хотите укрепить дыхательную и сердечно-сосудистой системы",
  "Быстрый способ сбросить лишние килограммы",
  "Улучшить настроение, повысить жизненный тонус",
];

export default function CoursePage() {
  // const { id } = useParams();
  // const { courses, setCourses } = useCourses();
  // const courseData: string[] = courses.filter((el: string[]) => el.id === id);
  return (
    <>
      <div className="md: container mx-auto flex flex-col">
        <Header page={"CorrectForTextPage"} />
        <CourseLogo courseName={"Бодифлекс"} />
        <FittingText fittings={fittings} />
        <div className="relative">
          <Directions directions={directions} />
          <LowStartMan />
          <CallText />
        </div>
      </div>
    </>
  );
}
