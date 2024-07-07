//import React from "react";
//import { useState } from "react";
//import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//const authUrl = "https://spfitnesspro.firebaseapp.com";

export type ErrorType = {
    error: Error;
    reset: () => void;
  }

//Авторизация
  const auth = getAuth();
  export const loginWithFirebase = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      // Дополнительные действия после успешной авторизации, например, перенаправление пользователя на другую страницу
      console.log('Пользователь успешно авторизован:', user);
      return user;
    } catch (error) {
      // Обработка ошибок при авторизации
      const errorCode: ErrorType = error.code;
      const errorMessage: ErrorType = error.message;
      console.error('Ошибка при авторизации пользователя:', errorCode, errorMessage);
      throw new Error(errorMessage);
    }
  };


/*   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email: string, password: string): Promise<UserCredential>
  .then((userCredential) => {
    return fetch(authUrl + "/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),

    // Успешная регистрация пользователя
    //const user = userCredential.user;
    // Дополнительные действия после успешной регистрации, например, перенаправление пользователя на другую страницу
    //console.log('Пользователь успешно зарегистрирован:', user);
  })
  .catch((error) => {
    // Обработка ошибок при регистрации пользователя
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Ошибка при регистрации пользователя:', errorCode, errorMessage);
    // Дополнительные действия при возникновении ошибки, например, отображение сообщения об ошибке пользователю
  }); */

/* (<div className="wrapper">
    <div className="container-signin">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Вход</h2>
          </div>
          <form className="modal__form-login" id="formLogIn" action="#">
            <input
              className="modal__input"
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <input
              className="modal__input"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter _hover01" id="btnEnter">
              <a href="../main.html">Войти</a>
            </button>
            <div className="modal__form-group">
              <p>Нужно зарегистрироваться?</p>
              <a href="signup.html">Регистрируйтесь здесь</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>) */