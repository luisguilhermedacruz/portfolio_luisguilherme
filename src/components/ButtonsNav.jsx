import { TiThMenu } from "react-icons/ti";
import style from '../styles/ButtonsNav.module.css';

const ButtonsNav = () => {
  return (
    <div className={style.buttons_nav}>
        <TiThMenu />
        <h1>PT-BR</h1>
    </div>
  )
}

export default ButtonsNav