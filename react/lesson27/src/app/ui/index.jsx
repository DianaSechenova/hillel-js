import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import '../../shared/model/index.css'
import {ThemeContext, themes} from "../../shared/model/themeContext.js";
import Header from "../../widgets/Header.jsx";
import Main from "../../pages/ui/Main.jsx";
import AboutMe from "../../pages/ui/AboutMe.jsx"
import NotFound from "../../pages/ui/NotFound.jsx";
import Contact from "../../pages/ui/Contact.jsx";
import ErrorBoundary from "../../feature/ErrorBoundary/ui";
import {routes} from "../../shared/config/routes.js";

function App() {
    const theme = useState(themes.white);

    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <ErrorBoundary>
                    <div className="content" style={{background: theme[0].background}}>
                        <Header/>
                        <main>
                            <Routes>
                                <Route path="*" element={<NotFound/>}></Route>
                                <Route path={routes.main} element={<Main/>}></Route>
                                <Route path={routes.about} element={<AboutMe/>}></Route>
                                <Route path={routes.contacts} element={<Contact/>}></Route>
                            </Routes>
                        </main>
                    </div>
                </ErrorBoundary>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App
