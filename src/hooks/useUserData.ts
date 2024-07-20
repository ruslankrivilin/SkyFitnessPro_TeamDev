import { useContext } from "react";
import { UserDataContext } from "../context/UserDataProvider";
import { useAppSelector } from "./redux-hooks";

//это хук React, который позволяет читать и подписываться на контекст из компонента UserDataContext
export function useUserData() {
  return useContext(UserDataContext);
}

//обеспечивает получение компонентом состояния аутентификации и перерисовку компонента при наличии изменений
export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
