import style from '../styles/Navlinks.module.css';

const Navlinks = () => {
  return (
    <div className={style.links_container}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
    </div>
  )
}

export default Navlinks