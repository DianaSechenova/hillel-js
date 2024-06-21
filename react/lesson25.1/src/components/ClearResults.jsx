import { Component } from 'react';
import PropTypes from 'prop-types';

class ClearResults extends Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear() {
    localStorage.clear();
    this.props.handleClearResult();
  }

  render() {
    return (
      <button className='btn btn-warning m-auto' onClick={this.handleClear}>Clear result</button>
    );
  }
}

ClearResults.propTypes = {
  handleClearResult: PropTypes.func.isRequired
};

export default ClearResults;
