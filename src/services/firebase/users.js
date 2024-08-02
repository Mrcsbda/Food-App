import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/firebaseConfig";
import { getAuth, sendEmailVerification, updateEmail } from "firebase/auth";
import { updateInfoUserFromStorage } from "../storage";

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
    if (formData?.email) {
      const auth = getAuth();
      const user = auth.currentUser;
      const newEmail = formData.email;
      await updateEmail(user, newEmail);
    }
    const resp = await updateDoc(userRef, formData);
    updateInfoUserFromStorage(formData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
