import React from 'react';

const Work = () => (
  <section id="work" className="section work">
    <h4 className="section__title">WORK EXPERIENCE</h4>
    <div className="section__content work__item">
      <a className="title" href="https://github.com/Lidemy/mentor-program-4th" rel="noopener noreferrer" target="_blank">LIDEMY 第四期的程式導師計畫</a>
      <p className="summary">
        畢業生 <br />
        Jun, 2020 – Dec, 2020<br />
        參加由 Lidemy 鋰學院創辦人 Huli 所開設的 <a href="https://github.com/Lidemy/mentor-program-4th" target="_blank">【 程式導師計畫第四期 】</a>，
        並記下半年以來以來自己的 <a href="https://mtr04-note.coderbridge.io/" rel="noopener noreferrer" target="_blank"> 程式學習紀錄</a>
        ，期間加強了許多以往模糊不清的觀念，並在 Blog 持續紀錄學習軌跡。
      </p>
      <ul className="info">
        <li>前端框架 ： React ( with Redux )</li>
        <li>前端技術 ： 熟悉原生 JavaScript 語法特性、SCSS</li>
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
        第一線協助客戶處理系統方面問題，
        指導客戶使用系統並協助工程師處理問題，
        在職期間培養了許多對程式學習的熱情。明白如何站在客戶與工程師的角度看待事情，並學會用彼此聽的懂的方式做溝通。
      </p>
      <ul className="info">
        <li>查看 log :  初步分析程式 bug，回覆工程師處理</li>
        <li>釐清資料問題 :  利用 sql 查詢資料庫，並確認資料內容回報資料問題</li>
        <li>製作文件模板 :  製作客戶所需之文件模板</li>
      </ul>
    </div>
  </section>
);

export default Work;
