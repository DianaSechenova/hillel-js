import { useDispatch } from 'react-redux';
import { clearData } from '../../core/slise/swapiSlice';
import { setInputValue } from '../../core/slise/formSlice';

function ButtonReset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(clearData());
    dispatch(setInputValue(''));
  };

  return (
    <button onClick={handleReset} className="btn btn-secondary">Clear</button>
  );
}

export default ButtonReset;
