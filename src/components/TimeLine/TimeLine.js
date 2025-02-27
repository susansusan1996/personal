import classes from "../TimeLine/TimeLine.module.css";
import catImage from "../../assets/cat.jpg";
import iisi_1 from "../../assets/iisi_1.jpg";
import iisi_2 from "../../assets/iisi_2.jpg";
import nanshan from "../../assets/nanshan.jpg";
import eva from "../../assets/eva2.jpg";
import shakespear from "../../assets/shakespear.jpg";
import highschool from "../../assets/highschool.png";
import java1 from "../../assets/java_class_1.jpg";
import java2 from "../../assets/java_class_2.jpg";
import * as React from "react";


const TimeLine = () => {
  return (
    <div id="timeline" className={classes.container}>
      <div className={classes.subject}>經歷</div>
      <ul className={classes.timeLine_ul}>
        <li style={{"--accent-color": "#3cb371"}}>
          <div className={classes.date}>2011/9~2014/6</div>
          <div className={classes.title}><b>台中女中</b><br/></div>
          <div className={classes.descr}>
            高中為台中女中畢業<br/>
            對自己的評價就是<b>努力型人格</b><br/>
            指考時被幸運女神眷顧，考太好了<br/>以至於誤打誤撞讀了自己好沒興趣的外文系TT
          </div>
          <img className={classes.susan_img} src={highschool} alt={"highschool"}/>
        </li>
        <li style={{"--accent-color": "#FF8040"}}>
          <div className={classes.date}>2018/6~2014/9</div>
          <div className={classes.title}><b>台灣大學外國語文學系</b><br/></div>
          <div className={classes.descr}>
            大學畢業於台大外文系，<br/>
            大學時期每天都在讀莎士比亞、聖經、西方名著<br/>
            <img className={classes.susan_img} src={shakespear} alt={"shakespear"}/>
            <b>(我不要再讀莎士比亞了啦~)</b><br/>
          </div>
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2018/8~2020/2</div>
          <div className={classes.title}><b>我的職涯起點</b><br/></div>
          <div className={classes.title}><b>長榮航空 - 票務處理專員</b><br/></div>
          <div className={classes.descr}>
            <div>
              出社會第一年就遇到<b>長榮空姐大罷工</b>，被全世界的旅客罵的咪咪冒冒。<br/>
              但也讓我學習到什麼樣的溝通方式才是溫柔有效，並能撫慰人心的
            <br/></div>
          </div>
          <img className={classes.susan_img} src={eva} alt={"eva"}/>
        </li>
        <li style={{"--accent-color": "#FF5733"}}>
          <div className={classes.date}>2020/6~2021/3</div>
          <div className={classes.title}><b>與資工的初次會面</b><br/></div>
          <div className={classes.title}><b>南山人壽 - 保戶服務專員</b><br/></div>
          <div className={classes.descr}>
            因為疫情，我開始思考轉職<br/>
            我來到了<b>南山人壽</b>，負責契約變更業務。<br/>
            剛好遇到公司導入新的ERP系統，導致業務處理流程極度不順利@@ <br/> 不過也因為常需要與工程師們回報問題，因此接觸到了軟體開發領域
          </div>
          <img className={classes.susan_img} src={nanshan} alt={"nanshan"}/>
        </li>
        <li style={{"--accent-color": "#E24A68"}}>
          <div className={classes.date}>2021/6~2022/11</div>
          <div className={classes.title}><b>北科大JAVA轉職專班</b><br/></div>
          <div className={classes.descr}>
            後來，因緣際會下，<br/>我得知了全端轉值班的資訊<br/>我利用半年時間修讀轉職專班，學習全端開發技術，<br/>並成功轉職至資拓宏宇擔任全端工程師。
          <img className={classes.susan_img} src={java1} alt={"java1"}/>
            <br/>
          <img className={classes.susan_img} src={java2} alt={"java2"}/>
          </div>

        </li>
        <li style={{"--accent-color": "#1B5F8C"}}>
          <div className={classes.date}>2023/1~2024/8</div>
          <div className={classes.title}><b>全端工程師</b><br/></div>
          <div className={classes.descr}>
            <div><b>資拓宏宇股份有限公司</b><br/></div>
            <div><b>專案一: 財政部智能稅務案 (2022/01-2024/08):</b><br/></div>

            <div><b>技術:</b><br/></div>
            Vue2 + Composition API、BootstrapVue、Spring Boot、Azure<br/>
            <div><b>專案內容: </b>網站可供財政部人員選擇要查稅的範圍，系統後端勾稽相對應的資料後，以批次的方式，抓出可能需要風險控管的廠商<br/></div>
            <div><b>工作內容:</b><br/></div>
            1. 開發前後端程式碼，並以<b>RestfulAPI</b>的方式，處理網頁前後端的溝通<br/>
            2. 以 <b>cytoscape.js</b> 圖形化圖表，將台灣國內外廠商的供應鏈上下游關係，以視覺化的方式呈現在財政部內部網頁上<br/>
            <div className={"usp-wrapper usp-wrapper-r"}>
              <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"button w-button usp-item"}
                  href={"https://js.cytoscape.org/"}
              >
                cytoscape.js
              </a>
            </div>
            3. 將<b>tableau</b>圖表，鑲嵌在財政部網頁上，解決網站之間的<b>跨域問題</b><br/>
            <div className={"usp-wrapper usp-wrapper-r"}>
              <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"button w-button usp-item"}
                  href={"https://www.tableau.com/zh-tw"}
              >
                tableau
              </a>
            </div>
            4. 以<b>ireport、POI</b> 套件，在後端產出報表，供財政部列印。<br/>
            5. 日常弱點掃描，並修正弱點程式碼。<br/>
            6. 日常修正程式碼，並至財政中心上版。<br/>
          </div>
          <img className={classes.susan_img} src={iisi_1} alt={"iisi_1"}/>
        </li>
        <li style={{"--accent-color": "#FBCA3E"}}>
          <div className={classes.date}>2023/1~2024/8</div>
          <div className={classes.title}><b>全端工程師</b><br/></div>
          <div className={classes.descr}>
            <div><b>資拓宏宇股份有限公司</b><br/></div>
            <b>專案二: 內政部地址查詢系統 (2023/11~2024/05):</b> <br/>
            <div><b>技術:</b><br/></div>
            Spring Boot、Spring security 、redis、pentaho <br/>

            <div><b>專案內容:</b><br/></div>

            當使用者輸入不完整的地址時，系統透過後端比對、拼裝後，<br/>
            返回正式完整的地址給使用者。<br/>

            <div><b>工作內容:</b><br/></div>
            1. 將原本存放在vertica database的地址撈出，倒入至redis。<br/>
            設計地址片段在redis的key、value該如何存放。<br/>
            2. 與外包廠商合作，將登入系統完成，以jwt token完成登入時的驗證加密。<br/>
            3. 設計串接pentaho etl 的job，讓後端api可以跟pentaho 系統溝通後，產生報表。<br/>
            <div className={"usp-wrapper usp-wrapper-r"}>
              <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"button w-button usp-item"}
                  href={"https://pentaho.com/"}
              >
                pentaho
              </a>
            </div>
            4. 設計後端地址比對服務的流程。
          </div>
          <img className={classes.susan_img} src={iisi_2} alt={"iisi_2"}/>
        </li>
        <li style={{"--accent-color": "#4CADAD"}}>
          <div className={classes.date}>Now</div>
          <div className={classes.title}><b>擔任全端網頁工程師近三年後，<br/>
            我開始思考自己在資工領域的知識是否仍有精進的空間。<br/>
            我熱愛這份職涯，也享受它帶來的成就感。<br/>
            希望有機會加入老師的實驗室，與大家交流學習，共同成長！<br/>
            期待認識實驗室的夥伴們，也感謝老師撥冗閱讀這封信。<br/>
            誠摯感謝！——凰喜<br/></b></div>
          <img className={classes.susan_img} src={catImage} alt={"cat"}/>
        </li>





      </ul>
    </div>
  );
};

export default TimeLine;
