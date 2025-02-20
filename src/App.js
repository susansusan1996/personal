import * as React from "react";
import rickImg from "./assets/IMG_0552.png";
import Provide from "./components/Provide/Provide";
import Experience from "./components/Experience/Experience";
import "./App.css";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {

  const onClickHandler = () => {
    window.location.hash = "provide";
  };

  return (
    <div className="App">
      <div className={"page-section radius-large"}>
        {/* <div>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://petban.sf39.app/"}
            className={"logo-button text-accent"}
          >
            Rick CV
          </a>
        </div> */}
        <div className={"container-l"}>
          <div className={"intro-text"}>
            <h1 className={"fs-700 an-h1"}>
              <br />
              你好我是{"  "}
              <span className={"ff-sans-cond text-accent"}>鐘凰喜！</span>
            </h1>
            <p className={"intro-p an-intro-p"}>
              台中人，獅子座! 大家都叫我阿喜!
              <br />
              
              <br />
              大學畢業後，在航空業、保險業打滾了幾年
              <br />
              接著，懵懵懂懂接觸到程式的世界，才開始了程式人生
              <br />
              期許自己能以活到老學到老的心態
              <br />
              繼續在軟體工程師這條路上深耕!
            </p>
            <div className={"usp-wrapper"}>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Vue</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Java</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>BootStrap</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Linux</div>
              </div>
            </div>
          </div>
          <div className={"img-w"}>
            <img className={"rick-img"} src={rickImg} alt={"rick_img"} />
          </div>
          <div className={"usp-wrapper usp-wrapper-r"}>
            {/* <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button usp-item"}
              href={"https://www.linkedin.com/in/rick-lo/"}
            >
              Linkedin
            </a> */}
            {/* <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button usp-item"}
              href={"https://github.com/rickluo94"}
            >
              Github
            </a> */}
          </div>
          <div className={"arrow"} onClick={onClickHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Provide />
      <TimeLine />
    </div >
  );
}

export default App;
