import React, { Component } from 'react';
import { Modal } from 'antd';


const DeliveryApp = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">銀色大門 - 長輩送餐服務 APP
      <a href="https://give-plus-plus.tw" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/krebikshaw/Give-plus-plus" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <a href="https://mtr04-note.coderbridge.io/2020/12/28/final-project-record/" rel="noopener noreferrer" target="_blank">專案開發心得</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible1')}>
      <p className="summary">參與 UXY 自學計畫為期 3 個月與企業合作專案，協助社團法人銀色大門老人福利協會，優化並重新設計既有『長輩送餐服務 APP』。</p>
      <ul className="info print--hide">
        <h5>專案介紹</h5>
        <li className='list__item'><strong>專案挑戰 ： </strong>因缺乏完善的整體規劃與直覺的操作介面，導致子女用戶無法透過 APP 順利訂餐</li>
        <li className='list__item'><strong>Re-design 目標 ： </strong>提升產品整體的溫度與互動性，讓既有的客戶使用 APP 服務訂餐意願提高，並降低真人客服溝通服務成本。</li>
        <li className='list__item'><strong>設計理念 ： </strong>保有原有簡約配色再搭配插畫風格 ,讓使用 APP 的用戶能在訂餐的過程中感受到溫暖與用心。</li>
        <li className='list__item'><strong>設計流程 ： </strong>與企業主與使用者進行訪談，深入了解問題後制定出解決方案，藉由 Figma 設計介面與原型,並透過易用性測試與業師回饋後，再進行一次迭代設計。</li>
        <li className='list__item'><strong>功能介紹 ： </strong>以子女用戶族群為目標對象,以凸顯訂餐功能為主要功能;另亦重新設計建立長輩資料頁面、自選送餐時間頁面，額外新增系統推薦、查看訂單與評分功能 等,以符合用戶的訂餐需求。</li>
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
      <ul>
        <li>
          <h4>首頁</h4>
          <img src="./image/give-plus-plus.tw_home.png" alt="" />
        </li>
        <li>
          <h4>賣家頁面</h4>
          <img src="./image/give-plus-plus.tw_vendorshop.png" alt="" />
        </li>
        <li>
          <h4>單一商品</h4>
          <img src="./image/give-plus-plus.tw_singleproduct.png" alt="" />
        </li>
        <li>
          <h4>個人資料</h4>
          <img src="./image/give-plus-plus.tw_vendoinfo.png" alt="" />
        </li>
        <li>
          <h4>購物車</h4>
          <img src="./image/give-plus-plus.tw_cart.png" alt="" />
        </li>
        <li>
          <h4>訂單明細</h4>
          <img src="./image/give-plus-plus.tw_products_orders.png" alt="" />
        </li>
        <li>
          <h4>登入頁面</h4>
          <img src="./image/give-plus-plus.tw_login.png" alt="" />
        </li>
        <li>
          <h4>註冊頁面</h4>
          <img src="./image/give-plus-plus.tw_register.png" alt="" />
        </li>
      </ul>
    </Modal>
  </div>
)

const StudyApp = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">HOUTEN  - 資源整合學習 APP
      <a href="https://give-plus-plus.tw" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/krebikshaw/Give-plus-plus" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <a href="https://mtr04-note.coderbridge.io/2020/12/28/final-project-record/" rel="noopener noreferrer" target="_blank">專案開發心得</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible1')}>
      <p className="summary">此專案是由我自行發起，並與另一位 UIUX 設計師為期 2 個月的協作專案。我們期望開發出一款如數位寶典般能夠解決個人學習問題的資源整合 APP。</p>
      <ul className="info print--hide">
        <h5>專案介紹</h5>
        <li className='list__item'><strong>專案概要 ： </strong>HOUTEN 是一款可以查詢課程評價、找到志同道合的學習夥伴的 APP，另外在學習遇到困難時，也能夠向專業領域人士尋求幫助。</li>
        <li className='list__item'><strong>動機發想 ： </strong>有鑒於科技化與疫情影響，目前線上學習資源平台的市場需求日漸擴大，大家越來越習慣於利用網際網路學習新的知識，所以希望以此為題，探討使用者的學習脈絡。</li>
        <li className='list__item'><strong>設計流程 ： </strong>利用發放問卷、使用者訪談，了解使用者在搜尋學習資源相關痛點與未來設計機會點，藉由 Figma 設計介面與原型。</li>
        <li className='list__item'><strong>功能介紹 ： </strong>以學生族群為目標對象,開發了一款能查詢課程評價並且找尋學習夥伴為主要功能的 APP，另亦整合學習資源,包括問題發問、交友聊天 等,以符合學生族群的學習需求。</li>
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
      title="銀色大門 - 長輩送餐服務 APP"
      visible={visible}
      onCancel={hideModal}
    >
      <ul>
        <li>
          <h4>首頁</h4>
          <img src="./image/give-plus-plus.tw_home.png" alt="" />
        </li>
        <li>
          <h4>賣家頁面</h4>
          <img src="./image/give-plus-plus.tw_vendorshop.png" alt="" />
        </li>
        <li>
          <h4>單一商品</h4>
          <img src="./image/give-plus-plus.tw_singleproduct.png" alt="" />
        </li>
        <li>
          <h4>個人資料</h4>
          <img src="./image/give-plus-plus.tw_vendoinfo.png" alt="" />
        </li>
        <li>
          <h4>購物車</h4>
          <img src="./image/give-plus-plus.tw_cart.png" alt="" />
        </li>
        <li>
          <h4>訂單明細</h4>
          <img src="./image/give-plus-plus.tw_products_orders.png" alt="" />
        </li>
        <li>
          <h4>登入頁面</h4>
          <img src="./image/give-plus-plus.tw_login.png" alt="" />
        </li>
        <li>
          <h4>註冊頁面</h4>
          <img src="./image/give-plus-plus.tw_register.png" alt="" />
        </li>
      </ul>
    </Modal>
  </div>
)


const GmailDemo = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">徵才形象網站專案： Gmail - Demo
      <a href="https://lidemy.github.io/jd-example/mail/desktop/index.html" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/Lidemy/gmail-demo" rel="noopener noreferrer" target="_blank">Github Repo</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible2')}>
      <p className="summary">與導師 Huli 合作的<a href="https://lidemy.github.io/jd-example/jd/" rel="noopener noreferrer" target="_blank">【 理想徵才文 】</a>
      專案，本人負責以 gmail 為範本利用 HTML 及 CSS，臨摹出一個相同的 gmail 信箱。</p>
      <ul className="info print--hide">
        <h5>成果</h5>
        <li>臨摹電腦版 gmail、手機版 gmail app</li>
        <li>偵測使用者使用的裝置，呈現出對應的頁面</li>
        <li>使用 HTML、CSS、JavaScript 實踐 SPA</li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="徵才形象網站專案： Gmail - Demo"
      visible={visible}
      onCancel={hideModal}
    >
      <ul>
        <li>
          <h4>電腦版首頁</h4>
          <img src="./image/desktop_list.png" alt="" />
        </li>
        <li>
          <h4>電腦版單一信件</h4>
          <img src="./image/desktop_mail.png" alt="" />
        </li>
        <li>
          <h4>手機版首頁</h4>
          <img src="./image/mobile_list.png" alt="" />
        </li>
        <li>
          <h4>手機版單一頁面</h4>
          <img src="./image/mobile_mail.png" alt="" />
        </li>
      </ul>
    </Modal>
  </div>
);


const Lazy = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">網站優化專案： Lazy - Hackathon
      <a href="https://yakim-shu.github.io/lazy-hackathon-yakim/dist/" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/yakim-shu/lazy-hackathon-yakim" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <a href="https://github.com/Lidemy/lazy-hackathon/issues/7" rel="noopener noreferrer" target="_blank">優化過程紀錄</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible3')}>
      <p className="summary">此為一個練習網頁優化能力的網站，因為覺得優化網站很有趣，自己嘗試來挑戰看看網頁的最佳優化，同時也紀錄了詳細的<a href="https://github.com/Lidemy/lazy-hackathon/issues/7" rel="noopener noreferrer" target="_blank"> 優化過程 </a>。</p>
      <ul className="info">
        <h5>優化成果</h5>
        <li>原始數據：行動版： 9 分、電腦版： 52 分</li>
        <li>優化後結果：行動版： 97 分、電腦版： 100 分</li>
      </ul>
      <ul className="info">
        <h5>優化技術 :  </h5>
        <li>基本壓縮 : <code>HTML</code>、<code>JavaScript</code>、<code>CSS</code></li>
        <li>CSS 優化 : <code>PostCSS</code>、<code>gulp-uncss</code></li>
        <li>圖片優化 : <code>tinypng-compress</code>、<code>lazyload</code>、<code>webp</code>、<code>CSS Sprite</code></li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="Lazy - Hackathon"
      visible={visible}
      onCancel={hideModal}
    >
      <img src="./image/pic_lazy_01.png" alt="" />
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
        <StudyApp visible={visible1} showModal={this.showModal} hideModal={this.hideModal} />
        {/* <Lazy visible={visible3} showModal={this.showModal} hideModal={this.hideModal} />
        <GmailDemo visible={visible2} showModal={this.showModal} hideModal={this.hideModal} /> */}
      </section>
    )
  }
};

export default Project;
