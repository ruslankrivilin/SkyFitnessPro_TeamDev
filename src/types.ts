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
