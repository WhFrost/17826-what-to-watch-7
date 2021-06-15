import {nanoid} from 'nanoid';
import {getRandomInteger, getRandomItem} from '../common';
import {COUNT_REVIEWS} from '../const';
import {DESCRIPTION, DIRECTORS} from './films';

const getDescription = () => getRandomItem(DESCRIPTION);

const gernerateReview = () => {
  const randomDescription = new Array(getRandomInteger(1, DESCRIPTION.length)).fill().map(getDescription);
  return {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: getRandomItem(DIRECTORS),
    },
    rating: getRandomInteger(1, 100) / 10,
    comment: randomDescription,
    date: Date(),
  };
};
const reviews = new Array(COUNT_REVIEWS).fill().map(gernerateReview);

export {
  reviews
};
