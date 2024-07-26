import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { firebaseAuth } from "./firebaseConfig";
export const registerUserWithEmailPassword = async ({
  name,
  email,
  password,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid } = resp.user;
    const infoUser = {
      ok: true,
      email,
      name,
      uid,
    };
    return infoUser;
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};
export const loginWithEmailAndPassword = async (email, password) => {
  try {
      const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const { uid } = resp.user
      return {
          ok: true,
          uid
      }
  } catch (error) {
      return { ok: false, errorMessage: error.message }
  }
}
