export const saveToLocaStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const updateInfoUserFromStorage = (data) => {
  const infoUserFromStorage = JSON.parse(localStorage.getItem("user"));
  const newUser = { ...infoUserFromStorage, ...data };
  saveToLocaStorage("user", newUser);
};
