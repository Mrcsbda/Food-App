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
    return restaurants;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllDishes = async () => {
  try {
    const restaurants = await getRestaurants();
    let allDishes = [];
    const restaurantsIds = restaurants.map((restaurant) => restaurant.id);
    for (let i = 0; i < restaurantsIds.length; i++) {
      const dishesRef = collection(
        firebaseDB,
        `restaurants/${restaurantsIds[i]}/dishes`
      );
      const querySnapshot = await getDocs(dishesRef);
      const dishesInfo = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      allDishes = allDishes.concat(dishesInfo);
    }
    return allDishes;
  } catch (error) {
    console.log(error);
    return []
  }
};
