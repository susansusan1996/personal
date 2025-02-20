import rickLecturerImg from "../../assets/IMG_0777.JPEG";
import p5 from "../../assets/p5.png";
import p8 from "../../assets/p8.png";
import p7 from "../../assets/p7.png";
import p6 from "../../assets/p6.jpeg";
import p2 from "../../assets/p2.PNG";
import p4 from "../../assets/p4.PNG";
import p3 from "../../assets/p3.PNG";
import p1 from "../../assets/p1.PNG";
import classes from "../TimeLine/TimeLine.module.css";
import rickImg from "../../assets/IMG_0552.png";

const TimeLine = () => {
  return (
    <div id="timeline" className={classes.container}>
      <div className={classes.subject}>Experience</div>
      <ul className={classes.timeLine_ul}>
        <li style={{"--accent-color": "#4CADAD"}}>
          <div className={classes.date}>Now</div>
          <div className={classes.title}><b>期待能與志同道合的大家合作!</b></div>
          {/* <div className={classes.descr}>
            Keep going keep growing
          </div> */}
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2023/1-2024/8</div>
          <div className={classes.title}><b>全端工程師</b><br/></div>
          <div className={classes.descr}>
          <div><b>資拓宏宇股份有限公司</b><br/></div>
          <b>專案二: 內政部地址查詢系統 (2023/11-2024/05):</b> <br/>
            技術: <br/>
            Spring Boot、Spring security 、redis、pentaho <br/>
            
            專案內容: <br/>
            當使用者輸入不完整的地址時，系統透過後端比對、拼裝後，<br/>
            返回正式完整的地址給使用者。<br/>

            工作內容: <br/>
            1. 將原本存放在vertica database的地址撈出，倒入至redis。<br/>
            設計地址片段在redis的key、value該如何存放。<br/>
            2. 與外包廠商合作，將登入系統完成，以jwt token完成登入時的驗證加密。<br/>
            3. 設計串接pentaho etl 的job，讓後端api可以跟pentaho 系統溝通後，產生報表。<br/>
            4. 設計後端地址比對服務的流程。
          </div>
        </li>
        <li style={{"--accent-color": "#1B5F8C"}}>
          <div className={classes.date}>2023/1-2024/8</div>
          <div className={classes.title}><b>全端工程師</b><br/></div>
          <div className={classes.descr}>
          <div><b>資拓宏宇股份有限公司</b><br/></div>
            專案一: 財政部智能稅務案 (2022/01-2024/08): <br/>
            技術: <br/>
            Vue2 + Composition API、BootstrapVue、Spring Boot、Azure<br/>
            
            工作內容: <br/>
            1. 與SA、PM，溝通確認程式設計規格書的內容無誤後，開發前後端程式碼。<br/>
            2. 以 cytoscape 圖形化圖表，將台灣國內外廠商的供應鏈上下游關係，以視覺化的方式呈現在財政部內部網頁上<br/>
            3. 將tableau圖表，鑲嵌在財政部網頁上。<br/>
            4. 後端產出、修正報表，供財政部列印。<br/>
            5. 日常弱點掃描，並修正弱點程式碼。<br/>
          </div>
        </li>
        <li style={{"--accent-color": "#E24A68"}}>
          <div className={classes.date}>2020/6-2021/3</div>
          <div className={classes.title}><b>保戶服務專員</b><br/></div>
          <div className={classes.descr}>
          <div><b>南山人壽保險股份有限公司</b><br/></div>
            工作內容<br/>
            處理保戶保險契約變更事宜<br/>
            接聽業務員諮詢電話<br/>
          </div>
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2018/8~2020/2</div>
          <div className={classes.title}><b>票務處理專員</b><br/></div>
          <div className={classes.descr}>
          <div><b>長榮航空</b><br/></div>


            工作內容<br/>
            1. 接聽來自全世界旅客的諮詢電話<br/>
            2. 處理旅客票務問題<br/>
            3. 處理客戶申訴電話<br/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;
