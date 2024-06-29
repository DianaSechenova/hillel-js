import { useContext } from "react";
import { ThemeContext } from "../../shared/model/themeContext"

function AboutMe() {
  const [theme] = useContext(ThemeContext);

    return (
      <div style={{ color: theme.color }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero facere laboriosam non exercitationem tempora maxime fugit beatae eveniet doloremque ipsam magnam minima, enim aspernatur. At voluptatibus officiis repudiandae voluptate tenetur quo deserunt non fugiat laboriosam earum reprehenderit, accusamus, placeat quia consequatur esse blanditiis dolorem, consequuntur impedit? Velit et quibusdam eaque odio consectetur nemo placeat at dolorum dicta, impedit sunt tempore delectus cum doloremque? Error similique, eligendi eaque laboriosam vitae reiciendis odit pariatur sapiente optio sint harum molestiae itaque vero soluta quod quidem. Iste non expedita veniam maxime consequatur. At praesentium similique eligendi, ut laborum dolores. Fuga accusamus dicta reprehenderit in?
      </div>
    )
  }
  
  export default AboutMe;
  