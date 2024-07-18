import CourseCard from "../../components/Common/CourseCard/CourseCard";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import WorkoutModal from "../../components/OtherModals/WorkoutModal/WorkoutModal";

export default function CoursePage() {
  return (
    <>
      <CourseCard />
      <MyProgressModal />
      <WorkoutModal />
    </>
  );
}
