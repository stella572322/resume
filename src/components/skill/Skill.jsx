import React from 'react';

const Skill = () => (
  <section id="skill" className="section skill no-padding">
    <h4 className="section__title">SKILL</h4>
      <div className="section__content">
      <div className="title">UI/UX 技能</div>
        <div className="section__container">
          <div className="card">
            <p><strong className="skill__name">使用者研究</strong></p>
            <ul className="info skill__content">
              <li>User Research</li>
              <li>Marketing Research</li>
              <li>親和圖法</li>
              <li>Persona 光譜</li>
              <li>Persona</li>
              <li>StoryBoarding</li>
              <li>User Journey Map</li>
              <li>UserFlow</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">介面設計與互動</strong></p>
            <ul className="info skill__content">
              <li>Wireframing</li>
              <li>Mockup</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">工具</strong></p>
            <ul className="info skill__content">
              <li>Figma</li>
              <li>Adobe Ai</li>
              <li>Adobe Ps</li>
              <li>Adobe Pr</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>
        <br/>

        <br/>
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
              <li>jQuery (略懂)</li>
              <li>React (略懂)</li>
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">其他</strong></p>
            <ul className="info skill__content">
              <li>Git</li>
              <li>npm / yarn</li>
            </ul>
          </div>
        </div>
      </div>

  </section>
);

export default Skill;
