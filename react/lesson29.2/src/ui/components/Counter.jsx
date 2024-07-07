import { useSelector } from 'react-redux';
import selectCounterValue from '../../core/slice/selectors.js';

export function Counter() {
  const value = useSelector(selectCounterValue);
  return <span style={{ display: 'block' }}>Value: {value}</span>;
}
