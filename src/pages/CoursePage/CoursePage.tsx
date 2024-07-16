import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import WorkoutModal from "../../components/OtherModals/WorkoutModal/WorkoutModal";

export default function CoursePage() {
  const objCard = [
    { id: 1, name: "Йога", progress: 40 },
    { id: 2, name: "Стретчинг", progress: 0 },
    { id: 3, name: "Зумба", progress: 100 },
  ];

  const IsMainPage = true;
  return (
    <>
      <div>
        <p className="text-#000000 mb-[40px] text-3xl font-semibold">
          Мои курсы
        </p>
        <div className="flex justify-between">
          {objCard.map((el) => (
            <CourseCard
              key={el.id}
              courseName={el.name}
              totalProgress={el.progress}
              isMainPage={IsMainPage}
            />
          ))}
        </div>
        <Exercises />
        <WorkoutModal />
      </div>
    </>
  );
}
