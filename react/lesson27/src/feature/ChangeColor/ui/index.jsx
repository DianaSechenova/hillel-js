import {Button} from "@mui/material"

import {useContext} from "react";
import {ThemeContext, themes} from "../../../shared/model/themeContext.js";

function ChangeColor() {
    const [theme, setTheme] = useContext(ThemeContext);

    const onClick = () => {
        if (theme.color === 'black') {
            console.log(theme)
            setTheme(themes.black)
        } else {
            setTheme(themes.white)
        }
        console.log(theme)

    }
    return (
        <Button variant="outlined"  style={{background: theme.background, color: theme.color }}  onClick={onClick}>Змінити тему</Button>
    )
}

export default ChangeColor
