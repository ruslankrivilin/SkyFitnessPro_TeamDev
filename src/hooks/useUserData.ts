import { useContext } from "react";
import { UserDataContext } from "../context/UserDataProvider";

export function useUserData() {
    return useContext(UserDataContext);
  }