import classes from "../Experience/Experience.module.css";

const Experience = () => {
  return (
    <div className={classes.pageSection}>
      <div className={classes.containerL}>
        <div className={classes.subject}>工作經歷</div>
        <div className={classes.introText}>
          GUGO運動廣告網站切版及動畫
          <br />
          中研院民族所藏品管理系統後端服務開發及介接前端
          <br />
          博弈遊戲網站重構及介接後端
          <br />
          CRM管理系統維護修改
          <br />
          食品代送系統（台灣知名食品大廠）
          <br />
          陸軍兵工整備發展中心系統重構維護
          <br />
          智慧倉儲客製化系統（海軍補給總庫房）
          <br />
          智慧倉儲客製化系統（台灣知名鞋業股份有限公司）
          <br />
          智慧倉儲客製化系統（德國知名亞洲區單車零配件廠）
          <br />
          智慧倉儲客製化系統（台灣知名CNC切削工具機製造廠）
          <br />
          共享租借籃球櫃
        </div>
      </div>
    </div>
  );
};

export default Experience;
