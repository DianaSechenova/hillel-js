import {Route, Routes} from 'react-router-dom';
import {HistoryRouter as Router} from 'redux-first-history/rr6'
import {route} from "../engine/config/route.jsx";
import {history, store} from "../engine/init/store.js";
import Layout from "./components/Layout.jsx";
import {Provider} from "react-redux";


function App() {

  return (
      <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/" element={<Layout />}>
                {Object.keys(route).map(
                    item => <Route element={route[item].element} path={route[item].path} key={item} />
                )}
              </Route>
            </Routes>
          </Router>
      </Provider>
  )
}

export default App
