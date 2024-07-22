import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBounary.jsx";
import Header from "./widgets/Header.jsx";
import {routes} from "./shared/config/routes.js";
import About from "./pages/about-component/About.jsx";
import {ToDoComponent} from "./pages/todo-component/ToDoComponent.jsx";
import {SwapiComponent} from "./pages/swapi-component/SwapiComponent.jsx";
import Footer from "./widgets/Footer.jsx";
import NotFound from "./NotFound.jsx";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {store} from "../core/store.js";
import {Provider} from "react-redux";


function App() {

  return (
      <BrowserRouter>
        <ErrorBoundary>
            <Provider store={store}>

            <Header/>
            <Box sx={{
              position: 'absolute',
              top: 72,
              bottom: 72,
              right: 0,
              left: 0,
              overflowY: 'scroll'
            }}
            >
              <Container
                  sx={{
                    padding: 2,
                    marginTop: 2,
                    marginBottom: 2,
                  }}
              >
              <Routes>
                <Route path="*" element={<NotFound/>}></Route>
                <Route path={routes.about} element={<About/>}></Route>
                <Route path={routes.todo} element={<ToDoComponent/>}></Route>
                <Route path={routes.swapi} element={<SwapiComponent/>}></Route>
              </Routes>
              </Container>
            </Box>
            <Footer />
            </Provider>
        </ErrorBoundary>
      </BrowserRouter>
  )
}

export default App
