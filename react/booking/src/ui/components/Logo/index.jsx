import {Wrapper} from "./styles-component.jsx";
import {route} from "../../../engine/config/route.jsx";
import {Icon} from "../Header/styles-component.jsx";
export function Logo() {
    return (
        <Wrapper to={route.main.path}>
            <Icon /> Booking
        </Wrapper>
    )
}
