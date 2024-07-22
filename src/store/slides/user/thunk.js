import { registerUserWithEmailPassword } from "../../../firebase/providers";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { addNewUser } from "../../../services/firebase/users";
import { login } from "./user";

export const signUpWithEmailAndPassword = (data) => {
  return async (dispatch) => {
    try {
      const resp = await registerUserWithEmailPassword(data);
      if (resp.ok) {
        const user = {
          createdAt: new Date().getTime(),
          email: resp.email,
          loginMethod: "EMAIL",
          name: resp.name,
          updatedAt: new Date().getTime(),
        };
        await addNewUser(resp.uid, user);
        delete user.createdAt
        delete user.updatedAt
        dispatch(login(user));
        return true;
      } else {
        return resp.errorMessage;
      }
    } catch (error) {
      return false
    }
  };
};
