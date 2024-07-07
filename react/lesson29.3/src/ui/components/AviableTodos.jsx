import { useSelector } from 'react-redux';
import selectors from '../../core/selectors';

export default function AviableTodos() {
  const items = useSelector(selectors.items);

  return <div>All: {items.length}</div>
}