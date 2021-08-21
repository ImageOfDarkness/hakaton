import {Sform, SformInput} from "./style";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function Formm() {

  return (
    <Sform>
      {/*<SformInput></SformInput>*/}
      <Form.Input className={'Sform-input'} icon={'user'} iconPosition='left' placeholder='Username'/>
      <Form.Input className={'Sform-input'} icon='lock' iconPosition='left' type='password'/>
      <Button className={'Sform-button'} content='Login' primary />
      <Button className={'Sform-button'} content='Registration' primary ><a className={'registration'} href="/Registration">Registration</a></Button>
    </Sform>
  )
}

export default Formm