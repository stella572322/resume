import React from 'react';

const Work = () => (
  <section id="work" className="section work">
    <h4 className="section__title">WORK EXPERIENCE</h4>
    <div className="section__content work__item">
      <a className="title" href="https://github.com/Lidemy/mentor-program-4th" rel="noopener noreferrer" target="_blank">LIDEMY 第四期的程式導師計畫</a>
      <p className="summary">
        畢業生 <br />
        Jun, 2020 – Dec, 2020<br />
        參加 Lidemy 鋰學院創辦人 Huli 所開設的 <a href="https://github.com/Lidemy/mentor-program-4th" target="_blank">【 程式導師計畫第四期 】</a>，
        認識與理解許多程式相關的思考方式及觀念，
        並在跟課的這半年期間持續利用 Blog 紀錄學習軌跡，
        完成一路以來的 <a href="https://mtr04-note.coderbridge.io/" rel="noopener noreferrer" target="_blank"> 程式學習紀錄。</a>
        
      </p>
      <ul className="info">
        <li>前端框架 ： React ( with Redux )</li>
        <li>前端技術 ： 熟悉原生 JavaScript 語法特性、SCSS，知道 Ajax 以及如何與後端串接</li>
        <li>後端技術 ： 搭配使用 Express 框架、PHP 基本的 CRUD 操作、開發 RESTFul API</li>
        <li>資安防範 ： 了解如何預防 XSS、SQL Injection、CORS 的基本常識</li>
        <li>基本部署 ： 具備部署 GitHub Page 及 AWS EC2 的經驗，並懂得如何應用 Nginx 作代理</li>
        <li>現代網頁工程及優化 ： Webpack 打包工具、 gulp 任務管理、網頁載入優化</li>
      </ul>
    </div>

    <div className="section__content work__item">
      <h1 className="title" >正璽顧問有限公司</h1>
      <p className="summary">
        宏碁輔導工程師<br />
        Sep, 2019 – Feb, 2020<br />
        負責「司法院 - 線上起訴暨律師單一登入」及「司法院 - 第二代審判系統」之系統維護專案。
        第一線協助「律師」與「司法院資訊處」處理系統方面問題，
        指導資訊部人員使用系統並協助工程師處理問題，
        在職期間不僅培養出對程式的興趣，也練就短時間理解客戶需求的軟實力，
        並將客戶需求後與工程師進行溝通，間接推動系統的優化與修正。
      </p>
      <ul className="info">
        <li>查看 log :  初步分析程式 bug，回覆工程師處理</li>
        <li>釐清資料問題 :  利用 sql 查詢資料庫，並確認資料內容並分析問題</li>
        <li>製作文件模板 :  利用「漢書文書處理系統」製作客戶所需之文件模板</li>
      </ul>
    </div>
  </section>
);

export default Work;
