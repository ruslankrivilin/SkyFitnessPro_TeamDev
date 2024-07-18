import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUserData } from "../../hooks/useUserData";
import { UserContextType } from "../../types";

export default function PrivateRoute() {
  const userData: UserContextType | null = useUserData();
  return userData ? <Outlet /> : <Navigate to={appRoutes.MAIN} />;
}
