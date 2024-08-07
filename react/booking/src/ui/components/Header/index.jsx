import {Wrapper} from "./styles-component.jsx";
import {Stack} from "@mui/material";
import Button from "../Buttons/index.jsx";
import {route} from "../../../engine/config/route.jsx";
import {Logo} from "../Logo/index.jsx";

export default function Header() {
    return (
        <Wrapper component="header">
            <Logo />
            <Stack spacing={2} direction="row">
                <Button reactHref={route.main.path}>Main</Button>
                <Button reactHref={route.about.path}>About</Button>
            </Stack>
        </Wrapper>
    )
}
