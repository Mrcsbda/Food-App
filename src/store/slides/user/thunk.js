import {
  loginWithEmailAndPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../../firebase/providers";
import { addNewUser, getUserById } from "../../../services/firebase/users";
import { saveToLocaStorage } from "../../../services/storage";
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
        user.id = resp.uid;
        dispatch(login(user));
        saveToLocaStorage("user", user);
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
        userData.id = resp.uid;
        dispatch(login(userData));
        saveToLocaStorage("user", userData);
        return "ok";
      } else {
        return resp.errorMessage;
      }
    } catch (error) {
      return error.errorMessage;
    }
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    try {
      const resp = await signInWithGoogle();
      if (resp.ok) {
        const userInfo = {
          avatar: resp.avatar,
          createdAt: new Date().getTime(),
          email: resp.email,
          loginMethod: "GOOGLE",
          name: resp.name,
          updatedAt: new Date().getTime(),
        };

        const user = await getUserById(resp.id);
        if (user) {
          delete user.createdAt;
          delete user.updatedAt;
          user.id = resp.id;
          dispatch(login(user));
          saveToLocaStorage("user", user);
        } else {
          await addNewUser(resp.id, userInfo);
          delete userInfo.createdAt;
          delete userInfo.updatedAt;
          userInfo.id = resp.id;
          dispatch(login(userInfo));
          saveToLocaStorage("user", userInfo);
        }
      }
      return resp.ok
    } catch (error) {
      return false;
    }
  };
};
