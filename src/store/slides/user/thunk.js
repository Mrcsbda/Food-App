import {
  loginWithEmailAndPassword,
  registerUserWithEmailPassword,
} from "../../../firebase/providers";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { addNewUser, getUserById } from "../../../services/firebase/users";
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
        delete user.createdAt;
        delete user.updatedAt;
        dispatch(login(user));
        return "ok";
      } else {
        return resp.errorMessage;
      }
    } catch (error) {
      return false;
    }
  };
};

export const loginWithEmail = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const resp = await loginWithEmailAndPassword(email, password);
      if (resp.ok) {
        const userData = await getUserById(resp.uid);
        delete userData.createdAt;
        delete userData.updatedAt;
        dispatch(login(userData));
        return "ok";
      } else {
        return resp.errorMessage
      }
    } catch (error) {
      return error.errorMessage
    }
  };
};
