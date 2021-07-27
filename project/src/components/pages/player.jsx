import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useSelector} from 'react-redux';
import {getFilms} from '../../store/data/selectors';
import {getVideoPlayerFormatDuration} from '../../common';
import browserHistory from '../../browser-history';

function Player() {
  const [isPlaying, setIsPlaying] = useState(true);
  const films = useSelector(getFilms);
  const {id} = useParams();
  const film = films.find((element) => element.id === Number(id));
  const {name, videoLink, previewImage, runtime} = film;
  const formatedRuntime = getVideoPlayerFormatDuration(runtime);

  return (
    <div className="player">
      <VideoPlayer isPlaying={isPlaying} muted={false} src={videoLink} poster={previewImage}/>

      <button type="button" className="player__exit"
        onClick={() => browserHistory.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{
              left: '30%',
            }}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{formatedRuntime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
