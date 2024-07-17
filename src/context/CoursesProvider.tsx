import { createContext, FC, PropsWithChildren, useState } from "react";
import { CoursesContextType } from "../types";

export const CoursesContext = createContext<CoursesContextType | null>(null);

export const CourseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [courses, setCourses] = useState<string[]>([]);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};