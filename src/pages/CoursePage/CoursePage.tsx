// import Header from "../../components/Common/Header/Header";
import Header from "../../components/Common/Header/Header";
import CourseLogo from "../../components/DataComponents/CourseLogo/CourseLogo";
import Directions from "../../components/DataComponents/Directions/Directions";
import FittingText from "../../components/DataComponents/FittingText/FittingTexts";
import CallText from "../../components/OtherComponents/CallText/CallText";
import LowStartMan from "../../components/OtherComponents/LowStartMan/LowStartMan";

export default function CoursePage() {
  return (
    <>
      <div className="md: container mx-auto flex flex-col">
        <Header page={""}/>
        <CourseLogo courseName={"Зумба"} />
        <FittingText />
        <Directions />
        <div className="gap-10">
        <LowStartMan />
        <CallText />
        </div>
        
      </div>
    </>
  );
}
