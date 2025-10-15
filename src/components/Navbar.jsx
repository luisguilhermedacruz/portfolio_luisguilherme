import style from '../styles/navbar.module.css';
import ButtonsNav from './ButtonsNav';

const Navbar = () => {
  return (
    <div className={style.navbar_container}>
        <div className={style.navbar_mobile}>
          <h1 className={style.title_mobile}>LG</h1>
          <ButtonsNav/>
        </div>        
        <div className={style.navbar_desktop}>
            <h1 className={style.title_desktop_name}>LUIS GUILHERME</h1>
            <h2 className={style.title_desktop_sub}>DESENVOLVEDOR BACK-END</h2>
        </div>
          
    </div>
  )
}

export default Navbar