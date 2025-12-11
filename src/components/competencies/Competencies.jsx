import React from 'react';
import { useI18n } from '../../i18n';

const Competencies = () => {
  const { t } = useI18n();

  return (
    <section id="competencies" className="main-section competencies">
      <h4 className="main-section__title">{t('competenciesSection.title')}</h4>

      <div className="competencies-grid">
        <div className="competency-card">
          <div className="competency-card__icon">
            <i className="fas fa-users-cog"></i>
          </div>
          <div className="competency-card__content">
            <h5 className="competency-card__title">{t('competenciesSection.cards.crossFunctional.title')}</h5>
            <p className="competency-card__subtitle">{t('competenciesSection.cards.crossFunctional.subtitle')}</p>
            <p className="competency-card__desc">{t('competenciesSection.cards.crossFunctional.desc')}</p>
          </div>
        </div>

        <div className="competency-card">
          <div className="competency-card__icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="competency-card__content">
            <h5 className="competency-card__title">{t('competenciesSection.cards.opsSystem.title')}</h5>
            <p className="competency-card__subtitle">{t('competenciesSection.cards.opsSystem.subtitle')}</p>
            <p className="competency-card__desc">{t('competenciesSection.cards.opsSystem.desc')}</p>
          </div>
        </div>

        <div className="competency-card">
          <div className="competency-card__icon">
            <i className="fas fa-fire-extinguisher"></i>
          </div>
          <div className="competency-card__content">
            <h5 className="competency-card__title">{t('competenciesSection.cards.resilience.title')}</h5>
            <p className="competency-card__subtitle">{t('competenciesSection.cards.resilience.subtitle')}</p>
            <p className="competency-card__desc">{t('competenciesSection.cards.resilience.desc')}</p>
          </div>
        </div>

        <div className="competency-card">
          <div className="competency-card__icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <div className="competency-card__content">
            <h5 className="competency-card__title">{t('competenciesSection.cards.strategy.title')}</h5>
            <p className="competency-card__subtitle">{t('competenciesSection.cards.strategy.subtitle')}</p>
            <p className="competency-card__desc">{t('competenciesSection.cards.strategy.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
