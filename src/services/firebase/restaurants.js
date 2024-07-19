import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../../firebase/firebaseConfig";
export const getRestaurants = async () => {
  const deliveryRef = collection(firebaseDB, "restaurants");
  try {
    const querySnapshot = await getDocs(deliveryRef);
    let restaurants = [];
    querySnapshot?.forEach((doc) => {
      restaurants.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return restaurants ;
  } catch (error) {
    console.log(error);
    return error;
  }
};
