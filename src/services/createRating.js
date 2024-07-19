export const createRating = (restaurantRating) => {
  let rating = [];
  for (let i = 1; i <= 5; i++) {
    i <= restaurantRating ? rating.push("full") : rating.push("empty");
  }
  return rating;
};
