import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/firebaseConfig";
import { getAuth, updateEmail } from "firebase/auth";
import { getFromLocalStorage, saveToLocaStorage } from "../storage";

export const getUserById = async (id) => {
  const userRef = doc(firebaseDB, `users`, id);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.data();
};

export const addNewUser = async (id, userInfo) => {
  const userData = await getUserById(id);
  !userData && (await setDoc(doc(firebaseDB, "users", id), userInfo));
};

export const editInfoUser = async ({ formData, id }) => {
  try {
    const userRef = doc(firebaseDB, `users`, id);
    const resp = await updateDoc(userRef, formData);
    if (formData?.email) {
      const auth = getAuth();
      const user = auth.currentUser;
      const newEmail = formData.email;
      await updateEmail(user, newEmail);
    }
    const infoUserFromStorage = getFromLocalStorage("user");
    const newUser = { ...infoUserFromStorage, ...formData };
    saveToLocaStorage("user", newUser);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};
