export const getTime = (date) => {
  const time = new Date(date);
  return `${time.getHours()}:${time.getMinutes()}0`;
};
