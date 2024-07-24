import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, getBlob } from "firebase/storage";
import { CourseType, WorkoutType } from "../types";

import { getDatabase, ref, get, child, set } from "firebase/database";

import { compareByOrder } from "./utils"; // REALTIME DB
import { getAuth, updatePassword } from "firebase/auth";





export const fetchAndProcessImage = async (src: string) => {
  const storage = getStorage();
  const stRef = storageRef(storage, `gs://fitnes-bro.appspot.com/${src}`);
  const blob = await getBlob(stRef);

  const url = URL.createObjectURL(blob);
  return url;
};



export const fetchAndProcessImageLaptop = async (src_laptop: string) => {
  const storage = getStorage();
  const stRef_laptop = storageRef(
    storage,
    `gs://fitnes-bro.appspot.com/${src_laptop}`
  );
  const blob = await getBlob(stRef_laptop);
  const url_laptop = URL.createObjectURL(blob);
  return url_laptop;
};















