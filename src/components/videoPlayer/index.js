import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'video-react';

const VideoPlayer = props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      {...props}
    />
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string,
};

VideoPlayer.defaultProps = {
  src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
};

export default VideoPlayer;
