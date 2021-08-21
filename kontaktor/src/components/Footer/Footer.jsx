import {Sfooter} from "./style";
import {SfooterLogo, SfooterLogoItem, SfooterMenu, SfooterMenuItem} from "./style";

function Footer() {
  return (
    <Sfooter className="Footer">
      <SfooterLogo>
        <SfooterLogoItem><a href="/Home">Креативное пространство</a></SfooterLogoItem>
        <SfooterLogoItem SfooterLogoItemAalt>2021, Дизайн-завод «Флакон»</SfooterLogoItem>
      </SfooterLogo>
      <SfooterMenu>
        <SfooterMenuItem><a href="/Home">Главная</a></SfooterMenuItem>
        <SfooterMenuItem><a href="/Home">Афиша</a></SfooterMenuItem>
        <SfooterMenuItem><a href="/Home">Резиденты</a></SfooterMenuItem>
        <SfooterMenuItem><a href="/Home">Контакты</a></SfooterMenuItem>
      </SfooterMenu>
    </Sfooter>
  )
}

export default Footer