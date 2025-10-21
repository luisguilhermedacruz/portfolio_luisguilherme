import style from '../styles/MobileMenu.module.css';
import { useTranslation } from "react-i18next";
import { FaTimesCircle } from "react-icons/fa";

const Mobile_Menu = () => {
  const { t } = useTranslation();

  return (
    <div className={style.menu_links_container}> 
      <FaTimesCircle size={40} className={style.close_icon} /> 
      <a href="#home"><span className={style.link_content}>{t('nav.home')}</span></a>
      <a href="#about"><span className={style.link_content}>{t('nav.about')}</span></a>
      <a href="#projects"><span className={style.link_content}>{t('nav.projects')}</span></a>
      <a href="#skills"><span className={style.link_content}>{t('nav.skills')}</span></a>
      <a href="#contact"><span className={style.link_content}>{t('nav.contact')}</span></a>
      
    </div>
  )
}

export default Mobile_Menu