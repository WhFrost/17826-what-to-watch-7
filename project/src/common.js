const getRandomInteger = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getFormatDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  const seconds = Math.floor(minutes / 60);
  if (hours < 1) {
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const createCapitalizedFirstLetter = (str) => str && str[0].toUpperCase() + str.slice(1);


const getFormatedDate = (date, local, options) => date.toLocalString(local, options);

export {
  getRandomInteger,
  getRandomItem,
  getFormatDuration,
  createCapitalizedFirstLetter,
  getFormatedDate
};
