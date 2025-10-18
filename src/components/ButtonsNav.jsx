import { useTranslation } from "react-i18next";
import { TiThMenu } from "react-icons/ti";
import style from "../styles/ButtonsNav.module.css";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const activeLanguage = i18n.language; 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={style.change_language_container}>
      <span
        className={`${style.language_option} ${
          activeLanguage === "pt" ? style.active : ""
        }`}
          onClick={() => changeLanguage("pt")}
      >
        PT
      </span>
      <span className={style.language_separator}>|</span>
      <span
        className={`${style.language_option} ${
          activeLanguage === "en" ? style.active : ""
        }`}
        onClick={() => changeLanguage("en")}
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
