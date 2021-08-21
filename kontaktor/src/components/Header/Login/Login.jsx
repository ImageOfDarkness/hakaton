import {SloginWrapper, Slogin} from "./styled";
import Form from "../Form/Form";

function Login() {

  return (
    <SloginWrapper>
      <Slogin className={"ui secondary button"}><a href="/LoginForm">Login</a></Slogin>
    </SloginWrapper>
  )
}

export default Login