import {SregForm} from "./style";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function RegistrationForm() {
  return (
    <SregForm>
      <Form.Input label='Username' placeholder='Username'/>
      <Form.Input label='Password' placeholder='Password' type={"password"}/>
      <Form.Input label='email' placeholder="email" type={"email"}></Form.Input>
      <Button content='Registrated' primary />
    </SregForm>
  )
}

export default RegistrationForm