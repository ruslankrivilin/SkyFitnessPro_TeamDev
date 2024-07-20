import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseType } from "../../types";

//тип CourseStateType содержит массив курсов, выбранный курс и флаг, указывающий, выбран ли курс
type CourseStateType = {
  courses: CourseType[];
  chosenCourse: CourseType | null;
  isChosenCourse: boolean;
};

//нициализируем начальное состояние initialState с пустым массивом курсов, нулевым выбранным курсом и флагом isChosenCourse равным false
const initialState: CourseStateType = {
  courses: [],
  chosenCourse: null,
  isChosenCourse: false,
};

//Создается slice с именем "course" с использованием функции createSlice. 
//Внутри этого slice определяется одно действие setCourses, которое устанавливает массив курсов в состоянии.
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<{courses: CourseType[]}>) => {
      state.courses = action.payload.courses;
    },
  },
});

//Экспортируем созданные состояние setCourses и редуктор courseReducer
export const { setCourses } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;