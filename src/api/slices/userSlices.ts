import { createSlice } from "@reduxjs/toolkit";

//Создаем изначальное состояние
const initialState = {
  email: "",
  token: "",
  id: "",
};

//данный slice копирует состояние и изменяет(очещает) его
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //reducer с setUser принимает предыдущее состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего)
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem("email", JSON.stringify(action.payload.email));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("id", JSON.stringify(action.payload.id));
    },
    //reducer с removeUser удаляет значения в текущем состоянии
    removeUser(state) {
      state.email = "";
      state.token = "";
      state.id = "";
      localStorage.setItem("email", JSON.stringify(""));
      localStorage.setItem("token", JSON.stringify(""));
      localStorage.setItem("id", JSON.stringify(""));
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
