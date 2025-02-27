import * as React from "react";
import SusanImg from "./assets/IMG_0552.png";
import Provide from "./components/Provide/Provide";
import "./App.css";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {

  const onClickHandler = () => {
    window.location.hash = "provide";
  };

  return (
    <div className="App">
      <div className={"page-section radius-large"}>
        <div className={"container-l"}>
          <div className={"intro-text"}>
            <h1 className={"fs-700 an-h1"}>
              <br />
              老師您好，我是{"  "}
              <span className={"ff-sans-cond text-accent"}>鐘凰喜</span>
            </h1>
            <p className={"intro-p an-intro-p"}>
              來自台中，獅子座，大家都叫我阿喜。
              <br />
              <br />
              大學畢業後，在航空業、保險業打滾了幾年
              <br />
              直到因緣際會接觸到資工的世界，才正式開啟了我的程式人生。
              <br />
              在軟體工程領域工作近三年後，我深感資工本科的專業知識對於長遠發展的重要性，
              <br />
              因此希望能有機會加入老師的實驗室，精進自我。
              <br />
              我始終抱持「活到老，學到老」的心態，
              <br />
              期許自己能在工程師這條道路上持續深耕，挑戰更高的技術層次。
              <br />
              期待有機會與實驗室的夥伴們一同學習與成長。
              <br />
              誠摯感謝老師您的時間！
              <br />

            </p>
            <div className={"usp-wrapper"}>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Java</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>SpringBoot</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Vue.js</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>JavaScript</div>
              </div>

              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>BootStrap</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>AWS</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Azure</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>MsSQL</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>PostgreSQL</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>redis</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Linux</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Docker</div>
              </div>
            </div>
          </div>
          <div className={"img-w"}>
            <img className={"susan-img"} src={SusanImg} alt={"susan_img"} />
          </div>
          <div className={"usp-wrapper usp-wrapper-r"}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button usp-item"}
              href={"https://github.com/susansusan1996"}
            >
              Github
            </a>
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
