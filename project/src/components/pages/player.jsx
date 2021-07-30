import React, {useState, useRef, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getFilms} from '../../store/data/selectors';
import {getVideoPlayerFormatDuration} from '../../common';
import browserHistory from '../../browser-history';
import LoadingSpinner from '../loading/loading';

function Player() {
  const films = useSelector(getFilms);
  const {id} = useParams();
  const film = films.find((element) => element.id === Number(id));
  const {name, videoLink, previewImage} = film;

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [isPlaying]);
  const [isLoadingFilm, setIsLoading] = useState(false);
  useEffect(() => {
    videoRef.current.onloadeddata = () => setIsLoading(true);
  }, [videoRef]);
  const progressRef = useRef(null);
  const progressToggleRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const updateProgress = () => {
    progressRef.current.value = videoRef.current ? ((videoRef.current.currentTime / videoRef.current.duration) * 100) : 0;
    const actualDuration = getVideoPlayerFormatDuration(videoRef.current.duration - videoRef.current.currentTime);
    progressToggleRef.current.style.left = `${videoRef.current ? ((videoRef.current.currentTime / videoRef.current.duration) * 100) : 0}%`;

    setTimeLeft(`${actualDuration}`);
  };

  const handleFullScreenMode = () => {
    if (videoRef.current) {
      videoRef.current.fullscreen ? videoRef.current.exitFullscreen() : videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={previewImage}
        onTimeUpdate = {updateProgress}
      >
      </video>

      <button type="button" className="player__exit"
        onClick={() => browserHistory.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress ref={progressRef} className="player__progress" value="0" max="100"></progress>
            <div
              ref={progressToggleRef}
              className="player__toggler"
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        {
          !isLoadingFilm
            ?
            <div style={{
              position: 'absolute',
              left: '5%',
              transform:'scale(0.75, 0.75)',
            }}
            >
              <LoadingSpinner />
            </div>
            :
            <div className="player__controls-row">
              {
                isPlaying ?
                  <button onClick={() => {
                    setIsPlaying(false);
                  }} type="button" className="player__play"
                  >
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Pause</span>
                  </button> :
                  <button onClick={() => {
                    setIsPlaying(true);
                  }} type="button" className="player__play"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
              }
              <div className="player__name">{name}</div>

              <button
                type="button"
                className="player__full-screen"
                onClick={() => handleFullScreenMode()}
              >
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
        }


      </div>
    </div>
  );
}

export default Player;
