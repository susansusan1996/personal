import classes from "./Provide.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Provide = () => {
  AOS.init({
    duration: 2200,
  });
  const onClickHandler = () => {
    window.location.hash = "timeline";
  };

  return (
    <div id="provide" className={classes.pageSection}>
      <div className={classes.containerL}>
        <div className={classes.subject}>技能</div>
        <ul className={classes.ulCard}>
          <li className={classes.liCard} data-aos="fade-up-right">
            <p>網站切版</p>
            <ul>
              <li>HTML + CSS</li>
              <li>Bootstrap</li>
            </ul>
          </li>
          <li className={classes.liCard} data-aos="fade-up">
            <p>Front-End 前端</p>
            <ul>
              <li>Vue</li>
              <li>JSP</li>
            </ul>
          </li>
          <li className={classes.liCard} data-aos="fade-up-left">
            <p>Back-End 後端</p>
            <ul>
              <li>JAVA Springboot</li>
              <li>JAVA SpringMVC</li>
              <li>MySql</li>
              <li>MSSQL</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </li>
          <li className={classes.liCard} data-aos="fade-up-right">
            <p>Infra</p>
            <ul>
              <li>Docker</li>
              <li>Aws (通過AWS雲端從業人員證照)</li>
              <li>Azure</li>
            </ul>
          </li>
        </ul>
        <div className={classes.arrow} onClick={onClickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Provide;
