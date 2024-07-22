import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/firebaseConfig";

export const getUserById = async (id) => {
    const userRef = doc(firebaseDB, `users`, id);
    const userSnapshot = await getDoc(userRef);
    return userSnapshot.data();
  }

  export const addNewUser = async (id, userInfo) => {
    const userData = await getUserById(id);
    !userData && (await setDoc(doc(firebaseDB, "users", id), userInfo));
  };