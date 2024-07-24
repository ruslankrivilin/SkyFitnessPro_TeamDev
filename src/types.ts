export type UserType = Record<string, unknown>;

export type UserContextType = {
  user: UserType | null;
  login: ((arg: UserType) => void) | null;
  logout: VoidFunction | null;
};

export type CoursesContextType = {
  courses: string[];
  setCourses: (arg: string[]) => void;
};

export interface CourseType {
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRu: string;
  order: number;
  workouts: string[];
}

export interface WorkoutType {
  name: string;
  _id: string;
  exercises: ExerciseType[];
  video: string;
}
export interface ExerciseType {
  name: string;
  progress: number;
  quantity: number;
}
