import { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonResult extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.onButtonClick();
  }

  render() {
    return (
      <button className='btn btn-success m-auto' onClick={this.handleToggle}>Show result</button>
    );
  }
}
ButtonResult.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};
export default ButtonResult;