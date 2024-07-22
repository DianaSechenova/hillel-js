import Header from "./components/Header.jsx";
import Form from './components/Fotm'
import Body from "./components/Body.jsx";
import ButtonReset from "./components/ButtonReset.jsx";
import Container from "@mui/material/Container";

export function SwapiComponent() {
    return (
            <Container>
                <Header />
                <Form />
                <Body />
                <ButtonReset />
            </Container>
    )
}