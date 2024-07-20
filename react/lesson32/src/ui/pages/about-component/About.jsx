import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

function About() {
    return (
        <Container>
            <Header />
            <Box sx={{ my: 4 }}>
                <Experience />
                <Skills />
                <Education />
            </Box>
        </Container>
    )
}

export default About;
  