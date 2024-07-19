import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./slices/coursesSlice";
import { userReducer } from "./slices/userSlices";

//Создаем конфигурацию хранилища состояния авторизации юзера и курсов, которое будет управльяться редуктором useReducer courseReducer
//связан с main.tsx
export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
  },
});

//Экспортируется хук useAppDispatch
export type AppDispatch = typeof store.dispatch;
//Экспортируется хук useAppSelector
export type RootState = ReturnType<typeof store.getState>;
