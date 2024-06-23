import { Component } from 'react';
import Emoji from "./components/Emoji.jsx";
import Head from "./components/Head.jsx";
import ButtonResult from './components/ButtonResult.jsx';
import ResultContent from './components/ResultContent.jsx';
import ClearResults from './components/ClearResults.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      clickCounts: JSON.parse(localStorage.getItem('clickCounts')) || {
        devil: 0,
        emoji: 0,
        happiness: 0,
        happySun: 0,
        smile: 0
      }
    };
    this.handleClearResult = this.handleClearResult.bind(this); 
    this.handleToggleResult = this.handleToggleResult.bind(this);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
  }

  handleToggleResult() {
    this.setState((prevState) => ({
      showResult: !prevState.showResult
    }));
  }

  handleClearResult() {
    localStorage.clear();
    this.setState({
      clickCounts: {
        devil: 0,
        emoji: 0,
        happiness: 0,
        happySun: 0,
        smile: 0
      },
      showResult: false
    });
  }

  handleEmojiClick(newCounts) {
    this.setState({ clickCounts: newCounts });
  }

  render() {
    return (
      <div className='container d-flex flex-column align-items-center'>
        <Head />
        <Emoji clickCounts={this.state.clickCounts} onEmojiClick={this.handleEmojiClick} />
        <div className="d-flex gap-2">
          <ButtonResult onButtonClick={this.handleToggleResult} />
          <ClearResults handleClearResult={this.handleClearResult} />
        </div>
        {this.state.showResult && <ResultContent clickCounts={this.state.clickCounts} />}
      </div>
    );
  }
}

export default App;