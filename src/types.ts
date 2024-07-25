export type UserType = {
  id: string;
  email: string | null;
  token: string;
};

export type UserContextType = {
  user: UserType | null;
  login: ((arg: UserType) => void) | null;
  logout: VoidFunction | null;
};

export type CoursesContextType = {
  courses: string[] | null;
  setCourses: ((arg: string[]) => void) | null;
};

export type CourseType = {
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
