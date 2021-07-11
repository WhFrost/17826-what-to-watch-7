import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

function VideoPlayer(props) {
  const {isPlaying, muted, src, poster} = props;

  const videoRef = useRef();

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
    return () => {
      videoRef.current = null;
    };
  });

  return (
    <video
      ref = {videoRef}
      src={src}
      className="player__video"
      poster={poster}
      muted={muted}
    >
    </video>
  );
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
