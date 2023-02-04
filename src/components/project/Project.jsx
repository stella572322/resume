import React, { Component } from 'react';
import { Modal } from 'antd';


const DeliveryApp = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">銀色大門 - 長輩送餐服務 APP
      <a href="https://stella572322.github.io/resume/#/prototype?type=silverGate" rel="noopener noreferrer" target="_blank">查看銀色大門專案</a>
      <a href="https://stella572322.github.io/portfolio/" rel="noopener noreferrer" target="_blank">作品集網站</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible1')}>
      <p className="summary">參與 UXY 自學計畫為期 3 個月與企業合作專案，協助社團法人銀色大門老人福利協會，優化並重新設計既有『長輩送餐服務 APP』。</p>
      <ul className="info print--hide">
        <h5>專案介紹</h5>
        <li className='list__item'><strong>專案挑戰 ： </strong>因缺乏完善的整體規劃與直覺的操作介面，導致子女用戶無法透過 APP 順利訂餐。</li>
        <li className='list__item'><strong>Re-design 目標 ： </strong>提升產品整體的溫度與互動性，讓既有的客戶使用 APP 服務訂餐意願提高，並降低真人客服溝通服務成本。</li>
        <li className='list__item'><strong>設計理念 ： </strong>保有原有簡約配色再搭配插畫風格 ，讓使用 APP 的用戶能在訂餐的過程中感受到溫暖與用心。</li>
        <li className='list__item'><strong>設計流程 ： </strong>與企業主與使用者進行訪談，深入了解問題後制定出解決方案，藉由 Figma 設計介面與原型，並透過易用性測試與業師回饋後，再進行一次迭代設計。</li>
        <li className='list__item'><strong>功能介紹 ： </strong>以子女用戶族群為目標對象，以凸顯訂餐功能為主要功能;另亦重新設計建立長輩資料頁面、自選送餐時間頁面，額外新增系統推薦、查看訂單與評分功能 等，以符合用戶的訂餐需求。</li>
      </ul>
      <ul className="info">
        <h5>技術</h5>
        <li><strong>前期研究 ： </strong><code>次級研究、既有產品檢視、競爭者分析、規劃顧客探索計畫、分析問卷＆訪談資料</code> </li>
        <li><strong>定義 ： </strong><code>人物誌原型圖、顧客流程地圖、定義設計觀點 (POV)</code> </li>
        <li><strong>發想 ： </strong><code> HMW 發想、頭腦風暴 Crazy8、四象限表</code> </li>
        <li><strong>設計 ： </strong><code>資訊架構 (IA)、Wireframes、Prototype 原型 </code> </li>
        <li><strong>易用性測試 ： </strong><code>Maze</code> </li>
      </ul>
      <ul className="info print--hide">
        <h5>工具</h5>
        <li><strong>會議討論 ： </strong><code>Discord</code></li>
        <li><strong>會議紀綠 ： </strong><code>Notion</code></li>
        <li><strong>線稿、精稿繪製 ： </strong><code>Figma</code></li>
        <li><strong>資訊架構圖繪製 ： </strong><code>FigJam</code></li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="銀色大門 - 長輩送餐服務 APP"
      visible={visible}
      onCancel={hideModal}
    >
      <iframe title="prototype" style={{height: '100vh', width: '100%', border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XWMJIb6C3fbtE84K772PC%2Fcase-study%3Fpage-id%3D0%253A1%26node-id%3D2%253A345%26viewport%3D455%252C742%252C0.02%26scaling%3Dscale-down-width" allowFullScreen></iframe>
    </Modal>
  </div>
)

const StudyApp = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">HOUTEN  - 資源整合學習 APP
      <a href="https://stella572322.github.io/resume/#/prototype?type=houten" rel="noopener noreferrer" target="_blank">查看 HOUTEN 專案</a>
      <a href="https://stella572322.github.io/portfolio/" rel="noopener noreferrer" target="_blank">作品集網站</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible2')}>
      <p className="summary">此專案是由我自行發起，並與另一位 UIUX 設計師為期 2 個月的協作專案。我們期望開發出一款如數位寶典般能夠解決個人學習問題的資源整合 APP。</p>
      <ul className="info print--hide">
        <h5>專案介紹</h5>
        <li className='list__item'><strong>專案概要 ： </strong>HOUTEN 是一款可以查詢課程評價、找到志同道合的學習夥伴的 APP，另外在學習遇到困難時，也能夠向專業領域人士尋求幫助。</li>
        <li className='list__item'><strong>動機發想 ： </strong>有鑒於科技化與疫情影響，目前線上學習資源平台的市場需求日漸擴大，大家越來越習慣於利用網際網路學習新的知識，所以希望以此為題，探討使用者的學習脈絡。</li>
        <li className='list__item'><strong>設計流程 ： </strong>利用發放問卷、使用者訪談，了解使用者在搜尋學習資源相關痛點與未來設計機會點，藉由 Figma 設計介面與原型。</li>
        <li className='list__item'><strong>功能介紹 ： </strong>以學生族群為目標對象，開發了一款能查詢課程評價並且找尋學習夥伴為主要功能的 APP，另亦整合學習資源，包括問題發問、交友聊天 等，以符合學生族群的學習需求。</li>
      </ul>
      <ul className="info">
        <h5>技術</h5>
        <li><strong>前期研究 ： </strong><code>市場背景調查與研究、分析問卷＆訪談資料</code> </li>
        <li><strong>定義 ： </strong><code>人物誌原型圖、顧客流程地圖、定義設計觀點 (POV)</code> </li>
        <li><strong>設計 ： </strong><code>資訊架構 (IA)、Wireframes、Prototype 原型 </code> </li>
      </ul>
      <ul className="info print--hide">
        <h5>工具</h5>
        <li><strong>會議討論 ： </strong><code>Google meet</code></li>
        <li><strong>會議紀綠 ： </strong><code>Google drive</code></li>
        <li><strong>線稿、精稿繪製 ： </strong><code>Figma</code></li>
        <li><strong>資訊架構圖繪製 ： </strong><code>FigJam</code></li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="HOUTEN  - 資源整合學習 APP"
      visible={visible}
      onCancel={hideModal}
    >
     <iframe title="prototype" style={{height: '100vh', width: '100%', border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XWMJIb6C3fbtE84K772PC%2Fcase-study%3Fpage-id%3D2%253A2185%26node-id%3D2%253A2456%26viewport%3D490%252C5840%252C0.13%26scaling%3Dscale-down-width" allowFullScreen></iframe>
    </Modal>
  </div>
);

class Project extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
  };

  showModal = type => {
    this.setState({
      [type]: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible1: false,
      visible2: false,
      visible3: false,
    });
  };

  render() {
    const { visible1, visible2, visible3 } = this.state;
    return (
      <section id="project" className="section project">
        <h4 className="section__title">PROJECTS</h4>
        <DeliveryApp visible={visible1} showModal={this.showModal} hideModal={this.hideModal} />
        <StudyApp visible={visible2} showModal={this.showModal} hideModal={this.hideModal} />
      </section>
    )
  }
};

export default Project;
