import { useTranslation } from "react-i18next";
import style from '../styles/Home.module.css';
import backgroundImage from '../assets/fundo_1.jpg';

const Home = () => {
  const {t} = useTranslation();

  return (
    <div className={style.home_container}
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <h1 className={style.welcome_text}>{t('home.welcome')}</h1>

    </div>
  )
}

export default Home