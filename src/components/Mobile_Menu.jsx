import style from '../styles/MobileMenu.module.css';
import { useTranslation } from "react-i18next"; 


const Mobile_Menu = () => {
  const { t } = useTranslation();

  return (
    <div className={style.menu_links_container}>
      <a href="#home">{t('nav.home')}</a>
      <a href="#about">{t('nav.about')}</a>
      <a href="#projects">{t('nav.projects')}</a>
      <a href="#skills">{t('nav.skills')}</a>
      <a href="#contact">{t('nav.contact')}</a>
    </div>
  )
}

export default Mobile_Menu