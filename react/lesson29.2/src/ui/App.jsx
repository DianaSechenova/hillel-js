import { Provider } from 'react-redux';
import { Button } from './components/Button.jsx';
import { Counter } from './components/Counter.jsx';

import { store } from '../core/store.js';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Button />
    </Provider>
  );
}

export default App;
