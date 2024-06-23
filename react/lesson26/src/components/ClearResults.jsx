import PropTypes from 'prop-types';

function ClearResults({handleClearResult}) {
  
    return (
      <button className='btn btn-warning m-auto' onClick={handleClearResult}>Clear result</button>
    );
}

ClearResults.propTypes = {
  handleClearResult: PropTypes.func.isRequired
};

export default ClearResults;
