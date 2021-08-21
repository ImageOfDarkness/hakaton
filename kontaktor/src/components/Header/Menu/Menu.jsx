import {SMenu, MenuItem} from "./styled";


function Menu() {
  return (
    <SMenu>
      <MenuItem><a href="/Home">Главная</a></MenuItem>
      <MenuItem>Резиденты</MenuItem>
      <MenuItem>Проекты</MenuItem>
      <MenuItem>Аренда</MenuItem>
    </SMenu>
  )
}

export default Menu