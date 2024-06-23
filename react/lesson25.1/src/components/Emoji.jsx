import { Component } from "react";
import PropTypes from 'prop-types';
import devil from "../assets/devil.png";
import emoji from "../assets/emoji.png";
import happiness from "../assets/happiness.png";
import happySun from "../assets/happy-sun.png";
import smile from "../assets/smile.png";

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: JSON.parse(localStorage.getItem('clickCounts')) || {
        devil: 0,
        emoji: 0,
        happiness: 0,
        happySun: 0,
        smile: 0
      }
    };
    this.counter = this.counter.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clickCounts !== this.props.clickCounts) {
      this.setState({ counts: this.props.clickCounts });
    }
  }

  counter(key) {
    this.setState((prevState) => {
      const newCounts = {
        ...prevState.counts,
        [key]: prevState.counts[key] + 1
      };
      localStorage.setItem('clickCounts', JSON.stringify(newCounts));
      this.props.onEmojiClick(newCounts);
      return { counts: newCounts };
    });
  }

  render() {
    return (
      <ul className="d-flex justify-content-center gap-2">
        <li className="d-flex align-items-end">
          <button className="btn btn-link" onClick={() => this.counter('devil')}><img className="icon" src={devil} alt="devil" /></button>
          <span className="fs-1 text">{this.state.counts.devil}</span>
        </li>
        <li className="d-flex align-items-end">
          <button className="btn btn-link" onClick={() => this.counter('emoji')}><img className="icon" src={emoji} alt="emoji" /></button>
          <span className="fs-1 text">{this.state.counts.emoji}</span>
        </li>
        <li className="d-flex align-items-end">
          <button className="btn btn-link" onClick={() => this.counter('happiness')}><img className="icon" src={happiness} alt="happiness" /></button>
          <span className="fs-1 text">{this.state.counts.happiness}</span>
        </li>
        <li className="d-flex align-items-end">
          <button className="btn btn-link" onClick={() => this.counter('happySun')}><img className="icon" src={happySun} alt="happySun" /></button>
          <span className="fs-1 text">{this.state.counts.happySun}</span>
        </li>
        <li className="d-flex align-items-end">
          <button className="btn btn-link" onClick={() => this.counter('smile')}><img className="icon" src={smile} alt="smile" /></button>
          <span className="fs-1 text">{this.state.counts.smile}</span>
        </li>
      </ul>
    );
  }
}

Emoji.propTypes = {
  onEmojiClick: PropTypes.func.isRequired,
  clickCounts: PropTypes.object.isRequired,
};

export default Emoji;
