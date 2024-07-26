export const saveToLocaStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
