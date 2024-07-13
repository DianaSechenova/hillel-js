import {useDispatch, useSelector} from 'react-redux';
import swapiSlice from "../../core/slise/slice.js";
import selectors from "../../core/selectors.js";

function ButtonReset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(swapiSlice.actions.clearResults());
    dispatch(swapiSlice.actions.clearAction())
  };

  return (
    <button onClick={handleReset} className="btn btn-secondary">Clear</button>
  );
}

export default ButtonReset;
