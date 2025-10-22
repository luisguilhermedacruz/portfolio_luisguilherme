import style from "../styles/MobileMenu.module.css";
import { useTranslation } from "react-i18next";
import { FaTimesCircle } from "react-icons/fa";

const Mobile_Menu = ({ isMenuOpen, toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${style.menu_links_container} ${
        isMenuOpen ? style.open : ""
      }`}
    >
      <FaTimesCircle
        size={40}
        className={style.close_icon}
        onClick={toggleMenu}
      />

      <a href="#home" onClick={toggleMenu}>
        <span className={style.link_content}>{t("nav.home")}</span>
      </a>

      <a href="#about" onClick={toggleMenu}>
        <span className={style.link_content}>{t("nav.about")}</span>
      </a>

      <a href="#projects" onClick={toggleMenu}>
        <span className={style.link_content}>{t("nav.projects")}</span>
      </a>

      <a href="#skills" onClick={toggleMenu}>
        <span className={style.link_content}>{t("nav.skills")}</span>
      </a>

      <a href="#contact" onClick={toggleMenu}>
        <span className={style.link_content}>{t("nav.contact")}</span>
      </a>
    </div>
  );
};

export default Mobile_Menu;
