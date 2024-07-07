import { useDispatch } from 'react-redux';
import { counter } from '../../core/slice/counterSlice';

export function Button() {
  const dispatch = useDispatch();
  const onIncrementClick = () => {
    dispatch(counter.actions.increment());
  };

  const onDecrementClick = () => {
    dispatch(counter.actions.decrement());
  };

  return (
    <div>
      <button onClick={onIncrementClick}>Inc</button>
      <button onClick={onDecrementClick}>Dec</button>
    </div>
  );
}
