import { useContext } from "react";
import { ThemeContext } from "../../shared/model/themeContext"

function Contact() {
  const [theme] = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color }}>
      <ul>
        <li>Номер телефона: +123123123</li>
        <li>Email: someone@example.com</li>
        <li>Git: https://github.com/</li>
      </ul>
    </div>
  )
}

export default Contact;
