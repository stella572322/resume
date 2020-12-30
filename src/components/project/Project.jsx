import React, { Component } from 'react';
import { Modal } from 'antd';


const FINAL_PROJECT = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">Give++ 二手商品交易平台
      <a href="https://give-plus-plus.tw" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/krebikshaw/Give-plus-plus" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <a href="https://mtr04-note.coderbridge.io/2020/12/28/final-project-record/" rel="noopener noreferrer" target="_blank">專案開發心得</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible1')}>
      <p className="summary">用 <code>React Hooks</code> 和 <code>Redux Toolkit</code> 打造的 SPA 二手商品交易平台，是由我進行領導與規劃，並找來 3 位同學一同合力開發。</p>
      <ul className="info print--hide">
        <h5>功能</h5>
        <li>商品系統 ： 自動篩選、手動搜尋、分類搜尋，並能決定排序方式</li>
        <li>購物車系統 ： 查看欲購買的項目及內容，並且成立訂單</li>
        <li>賣家系統 ： 賣家後台刊登或編輯欲銷售的商品</li>
        <li>個人資料管理系統 ： 編輯商店頁面的公告內容、聯絡資訊</li>
        <li>訂單系統 ： 隨時掌握/更新訂單的最新狀態</li>
        <li>後台管理系統 ： 審核最新刊登的商品，管理/維護網站的用戶及商品</li>
      </ul>
      <ul className="info">
        <h5>技術</h5>
        <li>前端專案基礎 ： <code>react hooks</code> </li>
        <li>元件樣式 ： <code>styled-component</code> </li>
        <li>前端路由 ： <code>react-router-dom</code> </li>
        <li>狀態管理 ： <code>redux toolkit</code> </li>
        <li>簡易測試 ： <code>cypress</code> </li>
        <li>後端以 <code>express</code> 部署到 AWS EC2、並使用 <code>Nginx</code> 作代理</li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="Give++ 二手商品交易平台"
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
    <h3 className="title">Gmail - 求職信範例
      <a href="https://lidemy.github.io/jd-example/mail/desktop/index.html" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/Lidemy/gmail-demo" rel="noopener noreferrer" target="_blank">Github Repo</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible2')}>
      <p className="summary">此為跟導師 Huli 合作的「理想徵才文」專案，我負責的部分是利用 HTML 及 CSS 切出一個完整的 gmail 求職信。</p>
      <ul className="info print--hide">
        <h5>功能</h5>
        <li>支持多層子留言及按讚功能、登入狀態會標示出原 po 的留言</li>
        <li>完成操作時會顯示回饋訊息、留言以 Ajax 方式操作</li>
        <li>會員系統：註冊、登入區塊</li>
        <li>會員權限系統：一般管理員可管理自己的留言、管理員有後台操作所有留言</li>
      </ul>
      <ul className="info">
        <h5>技術</h5>
        <li>後端： <code>PHP</code> 基本的 CRUD 操作</li>
        <li>資訊安全： 防 <code>XSS</code>、<code>SQL Injection</code> </li>
        <li>部署： Server 為 <code>Apache</code>、部署到 Ditgital Ocean</li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="Gmail - 求職信範例"
      visible={visible}
      onCancel={hideModal}
    >
      <ul>
        <li>
          <h4>一般會員登入</h4>
          <img src="./image/pic_commet_home.png" alt="" />
        </li>
        <li>
          <h4>管理員登入</h4>
          <img src="./image/pic_commet_admin.png" alt="" />
        </li>
      </ul>
    </Modal>
  </div>
);


const Lazy = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">Lazy - Hackathon
      <a href="https://yakim-shu.github.io/lazy-hackathon-yakim/dist/" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/yakim-shu/lazy-hackathon-yakim" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <a href="https://github.com/Lidemy/lazy-hackathon/issues/7" rel="noopener noreferrer" target="_blank">優化過程紀錄</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible3')}>
      <p className="summary">此為跟導師 Huli 合作的專案，故意做一個速度很慢的網站，當作課程的作業之一，目的是讓學生藉由優化此網頁來學習網頁最佳化。同時也紀錄了詳細的<a href="https://github.com/Lidemy/lazy-hackathon/issues/7" rel="noopener noreferrer" target="_blank"> 優化過程 </a>。</p>
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
        <FINAL_PROJECT visible={visible1} showModal={this.showModal} hideModal={this.hideModal} />
        <Lazy visible={visible3} showModal={this.showModal} hideModal={this.hideModal} />
        <GmailDemo visible={visible2} showModal={this.showModal} hideModal={this.hideModal} />
      </section>
    )
  }
};

export default Project;
