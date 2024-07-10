export type UserType = Record<string, unknown>;

export type ContextType = {
  user: UserType | null;
  login: (arg: UserType) => void;
  logout: VoidFunction;
};
