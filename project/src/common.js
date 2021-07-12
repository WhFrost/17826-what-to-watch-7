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

export {
  getRandomInteger,
  getRandomItem,
  getFormatDuration,
  createCapitalizedFirstLetter
};
