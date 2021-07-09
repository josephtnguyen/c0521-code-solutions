import React from 'react';
import PlayIcon from './play-icon';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      seconds: 0,
      timer: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.tick = this.tick.bind(this);
  }

  handlePlay(e) {
    if (this.state.isPaused) {
      this.setState({
        isPaused: false,
        timer: setInterval(this.tick, 1000)
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({
        isPaused: true
      });
    }
  }

  handleReset(e) {
    if (!this.state.isPaused) {
      return;
    }
    this.setState({
      seconds: 0
    });
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  render() {
    const { seconds, isPaused } = this.state;
    return (
      <div className="stopwatch">
        <button className="timer" onClick={this.handleReset}>
          <p className="time">
            {seconds}
          </p>
        </button>
        <button className='play-button' onClick={this.handlePlay}>
          <PlayIcon isPaused={isPaused} />
        </button>
      </div>
    );
  }
}
