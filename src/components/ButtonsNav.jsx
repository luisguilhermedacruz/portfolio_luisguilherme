import { TiThMenu } from "react-icons/ti";
import style from "../styles/ButtonsNav.module.css";

const ChangeLanguage = () => {
  const activeLanguage = "PT";

  return (
    <div className={style.change_language_container}>
      <span
        className={`${style.language_option} ${
          activeLanguage === "PT" ? style.active : ""
        }`}
      >
        PT
      </span>
      <span className={style.language_separator}>|</span>
      <span
        className={`${style.language_option} ${
          activeLanguage === "EN" ? style.active : ""
        }`}
      >
        EN
      </span>
    </div>
  );
};

const ButtonsNav = () => {
  return (
    <div className={style.buttons_nav}>
      <ChangeLanguage />
      <TiThMenu />      
    </div>
  );
};

export default ButtonsNav;
