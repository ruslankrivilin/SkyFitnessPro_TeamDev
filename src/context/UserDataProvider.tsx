import { createContext, FC, PropsWithChildren, useState } from "react";

type User = Record<string, unknown>;

type Context = {
  user: User | null,
  login: (arg: User) => void,
  logout: VoidFunction,
}

function getUserFromLocalStorage(): User | null {
  const res = localStorage.getItem("user");
  if (res) {
    try {
      return JSON.parse(res) as User;
    } catch (error) {
      return null;
    }
  }
  return null;
}

export const UserDataContext = createContext<Context | null>(null);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  function login(newUser: User) {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <UserDataContext.Provider value={{ user, login, logout }}>
      {children}
    </UserDataContext.Provider>
  );
};
