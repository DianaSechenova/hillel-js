import {Provider} from "react-redux";
import Header from "./components/Header.jsx";
import Form from './components/Fotm'
import Body from "./components/Body.jsx";
import ButtonReset from "./components/ButtonReset.jsx";
import {store} from "../../../core/store.js";
import Container from "@mui/material/Container";

export function SwapiComponent() {
    return (
        <Provider store={store}>
            <Container>
                <Header />
                <Form />
                <Body />
                <ButtonReset />
            </Container>
        </Provider>
    )
}