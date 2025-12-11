import React from 'react';
import { useI18n } from '../../i18n';

const Sidebar = () => {
  const { t } = useI18n();

  return (
    <aside className="resume-sidebar">
    {/* Target Role Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Target Role
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <ul className="target-list">
          <li>Frontend Team Lead</li>
          <li>Engineering Manager</li>
          <li>Technical Director</li>
        </ul>
      </div>
    </div> */}

    {/* Core Competencies Section */}
    <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        {t('sidebar.coreTitle')}
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <ul className="competency-list">
          <li className="competency-list__item">
            <strong>{t('highlights.competencies.items.product.label')}</strong>
            <span className="competency-list__desc">{t('highlights.competencies.items.product.desc')}</span>
          </li>
          <li className="competency-list__item">
            <strong>{t('highlights.competencies.items.pm.label')}</strong>
            <span className="competency-list__desc">{t('highlights.competencies.items.pm.desc')}</span>
          </li>
          <li className="competency-list__item">
            <strong>{t('highlights.competencies.items.system.label')}</strong>
            <span className="competency-list__desc">{t('highlights.competencies.items.system.desc')}</span>
          </li>
          <li className="competency-list__item">
            <strong>{t('highlights.competencies.items.ux.label')}</strong>
            <span className="competency-list__desc">{t('highlights.competencies.items.ux.desc')}</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Profiles Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Profiles
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="profile-item">
          <i className="fab fa-github fa-lg"></i>
          <div className="profile-item__info">
            <a href="https://github.com/krebikshaw" target="_blank" rel="noopener noreferrer" className="profile-item__name">krebikshaw</a>
            <span className="profile-item__label">GitHub</span>
          </div>
        </div>
        <div className="profile-item">
          <i className="fab fa-youtube fa-lg"></i>
          <div className="profile-item__info">
            <a href="https://www.youtube.com/@sowewannaknow" target="_blank" rel="noopener noreferrer" className="profile-item__name">所以想知道</a>
            <span className="profile-item__label">YouTube (2000+ 訂閱)</span>
          </div>
        </div>
      </div>
    </div> */}

    {/* Skills & Tools Section */}
    <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        {t('sidebar.skillsTitle')}
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <ul className="skill-list">
          <li className="skill-list__item">
            <strong>{t('highlights.skills.items.design.label')}</strong>
            <span className="skill-list__desc">{t('highlights.skills.items.design.desc')}</span>
          </li>
          <li className="skill-list__item">
            <strong>{t('highlights.skills.items.docs.label')}</strong>
            <span className="skill-list__desc">{t('highlights.skills.items.docs.desc')}</span>
          </li>
          <li className="skill-list__item">
            <strong>{t('highlights.skills.items.tech.label')}</strong>
            <span className="skill-list__desc">{t('highlights.skills.items.tech.desc')}</span>
          </li>
          <li className="skill-list__item">
            <strong>{t('highlights.skills.items.soft.label')}</strong>
            <span className="skill-list__desc">{t('highlights.skills.items.soft.desc')}</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Knowledge Sharing Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Knowledge Sharing
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="sharing-item">
          <i className="fab fa-youtube"></i>
          <div className="sharing-item__info">
						<a href="https://www.youtube.com/@sowewannaknow" target="_blank" rel="noopener noreferrer" className="profile-item__name">經營 YouTube 技術頻道</a>
            <span className="sharing-item__desc">2300+ 訂閱，熱門影片近 3 萬觀看</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-pen-nib"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">技術文章撰寫與產業分享</span>
            <span className="sharing-item__desc">撰寫技術文章，獲科技島社群轉載</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-chalkboard-teacher"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">代表公司擔任外部講師</span>
            <span className="sharing-item__desc">2+ 場/年，網頁開發與職涯主題</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-users"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">主導內部技術工作坊</span>
            <span className="sharing-item__desc">4+ 場/年，AI 應用、架構建置等</span>
          </div>
        </div>
      </div>
    </div> */}

    {/* Endorsements Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Endorsements
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <blockquote className="endorsement">
          <p>"在團隊轉型過程中，就像定心丸一樣讓人安心。展現出管理層的人力槓桿效應的好的成果。"</p>
          <cite>— BU Head</cite>
        </blockquote>
        <blockquote className="endorsement">
          <p>"非常認真且親力親為的主管。在職涯規劃感到迷惘時，也提供了很溫暖的輔導。"</p>
          <cite>— Team Members</cite>
        </blockquote>
      </div>
    </div> */}

    {/* Interests Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Interests
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="sharing-item">
          <i className="fas fa-plane"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">模擬飛行 (Flight Simulation)</span>
            <span className="sharing-item__desc">長期以真實飛行規範進行模擬訓練，熟悉各種操作與航圖判讀，在高複雜系統下進行風險評估、即時決策與與塔台協調溝通。享受在不確定環境中進行結構化分析、跨系統協作、嚴謹決策與細節控管的挑戰。</span>
          </div>
        </div>
      </div>
    </div> */}
    </aside>
  );
};

export default Sidebar;
