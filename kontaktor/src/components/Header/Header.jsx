import {SHeader} from "./styled";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";

function Header() {
  return (
    <SHeader>
      <Menu/>
        <Login className={"Lorin"}></Login>
    </SHeader>
  )
}

export default Header