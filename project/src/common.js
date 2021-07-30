const getRandomInteger = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getVideoPlayerFormatDuration = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  if (hours < 1) {
    return `-${minutes}:${seconds}`;
  }
  return `-${hours}:${minutes}:${seconds}`;
};

const getFilmFormatDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  if (hours < 1) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
};
const createCapitalizedFirstLetter = (str) => str && str[0].toUpperCase() + str.slice(1);

const adaptFilmToClient = (film) => {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
      scoresCount: film.scores_count,
      runtime: film.run_time,
      isFavorite: film.is_favorite,
      videoLink: film.video_link,
      previewVideoLink: film.preview_video_link,
    },
  );
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  return adaptedFilm;
};

export {
  getRandomInteger,
  getRandomItem,
  getVideoPlayerFormatDuration,
  getFilmFormatDuration,
  createCapitalizedFirstLetter,
  adaptFilmToClient
};
