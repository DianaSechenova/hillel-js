import PropTypes from 'prop-types';

function ButtonResult({ handleToggleResult }) {

    return (
      <button className='btn btn-success m-auto' onClick={handleToggleResult}>Show result</button>
    );
}

ButtonResult.propTypes = {
  handleToggleResult: PropTypes.func.isRequired,
};
export default ButtonResult;

