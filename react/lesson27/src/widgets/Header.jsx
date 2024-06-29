import Link from "../shared/ui/Link.jsx";
import ChangeColor from "../feature/ChangeColor/ui/index.jsx";

function Header() {
    return (
        <header className="header">
            <ul className="nav">
                <li><Link to="/" type="NavLink">Головна</Link></li>
                <li><Link to="/contacts" type="NavLink">Контакти</Link></li>
                <li><Link to="/about" type="NavLink">Про мене</Link></li>
            </ul>
            <ChangeColor />
        </header>
    )
}

export default Header
