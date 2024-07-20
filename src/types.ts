export type UserType = Record<string, unknown>;

export type UserContextType = {
  user: UserType | null;
  login: (arg: UserType) => void;
  logout: VoidFunction;
};

export type CoursesContextType = {
  courses: string[];
  setCourses: (arg: string[]) => void
};

//Типизация для courcesSlice
export interface CourseType {
  duration: number;
  level: string;
  nameRU: string;
  order: number;
  timeaday: string;
  src: string;
  src_laptop: string;
  _id: string;
  fitting: string;
  directions: string[];
}

export interface WorkoutType {
  name: string;
  _id: string;
  exercises: ExerciseType[];
  video:string;
}
export interface ExerciseType {
  name: string;
  progress: number;
  quantity: number;
}