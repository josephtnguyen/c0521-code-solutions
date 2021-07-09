import React from 'react';

export default function PlayIcon(props) {
  if (props.isPaused) {
    return (
      <i className="fa fa-play" />
    );
  } else {
    return (
      <i className="fa fa-pause" />
    );
  }
}
