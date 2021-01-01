import React from 'react';

const Skill = () => (
  <section id="skill" className="section skill no-padding">
    <h4 className="section__title">SKILL</h4>
      <div className="section__content">
        <div className="title">前端技能</div>
        <div className="section__container">
          <div className="card">
            <p><strong className="skill__name">HTML & CSS</strong></p>
            <ul className="info skill__content">
              <li>排版 ： Flexbox</li>
              <li>Bootstrap</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">JavaScript</strong></p>
            <ul className="info skill__content">
              <li>ES6</li>
              <li>Ajax requests</li>
              <li>API 串接</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">其他</strong></p>
            <ul className="info skill__content">
              <li>Git</li>
              <li>npm / yarn</li>
              <li>Gulp</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
        <div className="title">後端技能</div>
        <div className="section__container">
          <div className="card">
            <p><strong className="skill__name">PHP & MySQL</strong></p>
            <ul className="info skill__content">
              <li>使用 PDO 操作 MySQL</li>
              <li>透過內建語法實作 session</li>
              <li>理解並應用 password hash</li>
              <li>了解 SQL injection / XSS / CSRF 並防範</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">Node.js</strong></p>
            <ul className="info skill__content">
              <li>搭配使用 Express</li>
              <li>使用 EJS 建立網頁</li>
              <li>使用 Sequelize ODM 操作資料庫</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">部署</strong></p>
            <ul className="info skill__content">
              <li>AWS</li>
              <li>EC2</li>
              <li>Nginx PM2</li>
            </ul>
          </div>
        </div>
        
      </div>

  </section>
);

export default Skill;
