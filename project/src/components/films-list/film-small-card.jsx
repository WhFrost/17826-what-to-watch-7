import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import FilmProp from '../prop-validation/film.prop';

function FilmSmallCard(props) {
  const {film} = props;
  const {id, name, posterImage, previewImage, previewVideoLink} = film;
  const [isPlaying, setIsPlaying] = useState(false);

  const timeRef = useRef(null);

  useEffect(() => () => timeRef.current !== null && clearTimeout(timeRef.current));

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        timeRef.current = setTimeout(() => setIsPlaying(true), 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(timeRef.current);
        timeRef.current = null;
        setIsPlaying(false);
      }}
    >
      <div className="small-film-card__image">
        {
          isPlaying
            ? <VideoPlayer isPlaying={isPlaying} muted src={previewVideoLink} poster={previewImage}/>
            : <img src={posterImage} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"
          to={`film/${id}`}
          onClick={() => setIsPlaying(false)}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

FilmSmallCard.propTypes = {
  film: FilmProp.isRequired,
};

export default FilmSmallCard;
