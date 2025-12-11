import React from 'react';
import { useI18n } from '../../i18n';

const Project = () => {
  const { t } = useI18n();

  return (
    <section id="contributions" className="main-section contributions">
      <h4 className="main-section__title">{t('project.title')}</h4>

      <div className="contribution-group">
        <h5 className="contribution-group__title">
          <i className="fas fa-microphone-alt"></i>
          {t('project.group1Title')}
        </h5>

        <div className="contribution-item">
          <div className="contribution-item__icon">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="contribution-item__content">
            <h6 className="contribution-item__title">
              {t('project.youtubeTitle')}
              <span className="contribution-item__badge">{t('project.youtubeBadge')}</span>
            </h6>
            <p className="contribution-item__desc">{t('project.youtubeDesc')}</p>
          </div>
        </div>

        <div className="contribution-item">
          <div className="contribution-item__icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="contribution-item__content">
            <h6 className="contribution-item__title">
              {t('project.speakerTitle')}
              <span className="contribution-item__badge">{t('project.speakerBadge')}</span>
            </h6>
            <p className="contribution-item__desc">{t('project.speakerDesc')}</p>
          </div>
        </div>

        <div className="contribution-item">
          <div className="contribution-item__icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="contribution-item__content">
            <h6 className="contribution-item__title">
              {t('project.workshopTitle')}
              <span className="contribution-item__badge">{t('project.workshopBadge')}</span>
            </h6>
            <p className="contribution-item__desc">{t('project.workshopDesc')}</p>
          </div>
        </div>
      </div>

    {/* 專案支援 */}
    {/* <div className="contribution-group">
      <h5 className="contribution-group__title">
        <i className="fas fa-rocket"></i>
        專案支援
      </h5>
      
      <div className="contribution-item">
        <div className="contribution-item__icon">
          <i className="fas fa-robot"></i>
        </div>
        <div className="contribution-item__content">
          <h6 className="contribution-item__title">
            AI 產品 (BizeBaseAI) MVP 開發支援
          </h6>
          <p className="contribution-item__desc">
            在公司推動 AI 轉型的關鍵時刻，跨越職責範圍，支援參展用 MVP 的介面與功能開發。
          </p>
        </div>
      </div>
    </div> */}
    </section>
  );
};

export default Project;
