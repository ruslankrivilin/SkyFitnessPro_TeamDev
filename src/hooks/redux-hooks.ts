import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../api/store";


//функция возвращает экземпляр функции useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
//функция представляет типизированную версию функции useSelector
//Она используется для выбора и извлечения данных из состояния хранилища
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//export const useAppStore: () => AppStore = useStore;