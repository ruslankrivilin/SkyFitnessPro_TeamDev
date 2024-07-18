/* import './App.css' */

import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import MainPage from "./pages/MainPage/MainPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import WorkoutVideoPage from "./pages/WorkoutVideoPage/WorkoutVideoPage";
import SigninForm from "./components/Common/SigninForm/SigninForm";
import SignupForm from "./components/Common/SignupForm/SignupForm";

export default function App() {
  return (
    <Routes>
      <Route path={appRoutes.MAIN} element={<MainPage />} />
      <Route path={appRoutes.COURSE} element={<CoursePage />} />
      <Route path={appRoutes.USER_PROFILE} element={<UserProfilePage />} />
      <Route path={appRoutes.WORKOUT_VIDEO} element={<WorkoutVideoPage />} />
      <Route path={appRoutes.SIGNIN} element={<SigninForm />} />
      <Route path={appRoutes.SIGNUP} element={<SignupForm />} />
    </Routes>
  );
}
