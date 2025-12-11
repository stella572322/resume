import React from 'react';
import { useI18n } from '../../i18n';

const Highlights = () => {
  const { t } = useI18n();

  return (
    <div className="highlights-row">
      <section id="competencies" className="main-section highlights highlights-block">
        <h4 className="main-section__title">
          {t('highlights.competencies.title')} <span role="img" aria-label="competencies">🧩</span>
        </h4>
        <ul className="highlights-list">
          <li className="highlights-list__item">
            <strong>{t('highlights.competencies.items.product.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.competencies.items.product.desc')}</span>
          </li>
          <li className="highlights-list__item">
            <strong>{t('highlights.competencies.items.pm.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.competencies.items.pm.desc')}</span>
          </li>
          <li className="highlights-list__item">
            <strong>{t('highlights.competencies.items.system.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.competencies.items.system.desc')}</span>
          </li>
          <li className="highlights-list__item">
            <strong>{t('highlights.competencies.items.ux.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.competencies.items.ux.desc')}</span>
          </li>
        </ul>
      </section>

      <section id="skill" className="main-section highlights highlights-block">
        <h4 className="main-section__title">
          {t('highlights.skills.title')} <span role="img" aria-label="tools">🛠</span>
        </h4>
        <ul className="highlights-list">
          <li className="highlights-list__item">
            <strong>{t('highlights.skills.items.design.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.skills.items.design.desc')}</span>
          </li>
          <li className="highlights-list__item">
            <strong>{t('highlights.skills.items.docs.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.skills.items.docs.desc')}</span>
          </li>
          <li className="highlights-list__item">
            <strong>{t('highlights.skills.items.tech.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.skills.items.tech.desc')}</span>
          </li>
          <li className="highlights-list__item">
            <strong>{t('highlights.skills.items.soft.label')}</strong>
            <span className="highlights-list__desc">{t('highlights.skills.items.soft.desc')}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Highlights;
