import React from 'react';
import { useI18n } from '../../i18n';

const Work = () => {
  const { t } = useI18n();

  return (
    <section id="work" className="main-section work">
      <h4 className="main-section__title">{t('work.title')}</h4>

      <div className="experience-item">
        <div className="experience-item__marker"></div>
        <div className="experience-item__content">
          <h3 className="experience-item__company">{t('work.exp1.company')}</h3>
          <div className="experience-item__meta">
            <p className="experience-item__role">{t('work.exp1.role')}</p>
            <p className="experience-item__date">{t('work.exp1.date')}</p>
          </div>
          <p className="experience-item__note">
            <span role="img" aria-label="note">📌</span> {t('work.exp1.note')}
          </p>
          <ul className="experience-item__list">
            <li>
              <strong>{t('work.exp1.bullets.b1Label')}</strong> {t('work.exp1.bullets.b1Desc')}
            </li>
            <li>
              <strong>{t('work.exp1.bullets.b2Label')}</strong> {t('work.exp1.bullets.b2Desc')}
            </li>
            <li>
              <strong>{t('work.exp1.bullets.b3Label')}</strong> {t('work.exp1.bullets.b3Desc')}
            </li>
            <li>
              <strong>{t('work.exp1.bullets.projectsLabel')}</strong>
              <ul className="experience-item__projectList">
                <li className="experience-item__project">
                  <div className="experience-item__projectTitle">{t('work.exp1.projects.p1.title')}</div>
                  <ul className="experience-item__projectBullets">
                    <li>
                      <strong>{t('work.exp1.projects.p1.bgLabel')}</strong>
                      <span> {t('work.exp1.projects.p1.bgDesc')}</span>
                    </li>
                    <li>
                      <strong>{t('work.exp1.projects.p1.roleLabel')}</strong>
                      <span> {t('work.exp1.projects.p1.roleDesc')}</span>
                    </li>
                    <li>
                      <strong>{t('work.exp1.projects.p1.impactLabel')}</strong>
                      <span> {t('work.exp1.projects.p1.impactDesc')}</span>
                    </li>
                    <li>
                      <strong>{t('work.exp1.projects.p1.resultLabel')}</strong>
                      <span> {t('work.exp1.projects.p1.resultDesc')}</span>
                    </li>
                  </ul>
                </li>

                <li className="experience-item__project">
                  <div className="experience-item__projectTitle">{t('work.exp1.projects.p2.title')}</div>
                  <ul className="experience-item__projectBullets">
                    <li>
                      <strong>{t('work.exp1.projects.p2.bgLabel')}</strong>
                      <span> {t('work.exp1.projects.p2.bgDesc')}</span>
                    </li>
                    <li>
                      <strong>{t('work.exp1.projects.p2.roleLabel')}</strong>
                      <span> {t('work.exp1.projects.p2.roleDesc')}</span>
                    </li>
                    <li>
                      <strong>{t('work.exp1.projects.p2.impactLabel')}</strong>
                      <span> {t('work.exp1.projects.p2.impactDesc')}</span>
                    </li>
                    <li>
                      <strong>{t('work.exp1.projects.p2.resultLabel')}</strong>
                      <span> {t('work.exp1.projects.p2.resultDesc')}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-item__marker"></div>
        <div className="experience-item__content">
          <h3 className="experience-item__company">{t('work.exp2.company')}</h3>
          <div className="experience-item__meta">
            <p className="experience-item__role">{t('work.exp2.role')}</p>
            <p className="experience-item__date">{t('work.exp2.date')}</p>
          </div>
          <ul className="experience-item__list">
            <li>
              <strong>{t('work.exp2.bullets.b1Label')}</strong> {t('work.exp2.bullets.b1Desc')}
            </li>
            <li>
              <strong>{t('work.exp2.bullets.b2Label')}</strong> {t('work.exp2.bullets.b2Desc')}
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-item__marker"></div>
        <div className="experience-item__content">
          <h3 className="experience-item__company">{t('work.exp3.company')}</h3>
          <div className="experience-item__meta">
            <p className="experience-item__role">{t('work.exp3.role')}</p>
            <p className="experience-item__date">{t('work.exp3.date')}</p>
          </div>
          <ul className="experience-item__list">
            <li>
              <strong>{t('work.exp3.bullets.b1Label')}</strong> {t('work.exp3.bullets.b1Desc')}
            </li>
            <li>
              <strong>{t('work.exp3.bullets.b2Label')}</strong> {t('work.exp3.bullets.b2Desc')}
            </li>
            <li>
              <strong>{t('work.exp3.bullets.b3Label')}</strong> {t('work.exp3.bullets.b3Desc')}
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-item__marker"></div>
        <div className="experience-item__content">
          <h3 className="experience-item__company">{t('work.exp4.company')}</h3>
          <div className="experience-item__meta">
            <p className="experience-item__role">{t('work.exp4.role')}</p>
            <p className="experience-item__date">{t('work.exp4.date')}</p>
          </div>
          <ul className="experience-item__list">
            <li>
              <strong>{t('work.exp4.bullets.b1Label')}</strong> {t('work.exp4.bullets.b1Desc')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
