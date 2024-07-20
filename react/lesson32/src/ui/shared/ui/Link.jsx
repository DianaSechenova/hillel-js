import { NavLink } from "react-router-dom";

function Link(props) {
    const { to, children, href, sx } = props;
    const defaultStyles = {
        color: 'white',
        textDecoration: 'none',
        '&.active': {
            fontWeight: 'bold',
            textShadow: 'white 1px 0 10px'
        },
    };

    const styles = { ...defaultStyles, ...sx };

    if (to) {
        return (
            <NavLink to={to} style={styles}>
                {children}
            </NavLink>
        );
    } else {
        return (
            <a href={href} style={styles}>
                {children}
            </a>
        );
    }
}

export default Link;
