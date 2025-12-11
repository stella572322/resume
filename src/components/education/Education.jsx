import React from 'react';
import { useI18n } from '../../i18n';

const Education = () => {
  const { t } = useI18n();

  return (
    <section id="education" className="main-section education">
      <h4 className="main-section__title">{t('education.title')}</h4>

      <div className="education-item">
        <div className="education-item__marker"></div>
        <div className="education-item__content">
          <h3 className="education-item__school">{t('education.fuJen.school')}</h3>
          <p className="education-item__location">{t('education.fuJen.location')}</p>
          <p className="education-item__degree">{t('education.fuJen.degree')}</p>
          <p className="education-item__date">{t('education.fuJen.date')}</p>
        </div>
      </div>

      <div className="education-item">
        <div className="education-item__marker"></div>
        <div className="education-item__content">
          <h3 className="education-item__school">{t('education.lidemy.school')}</h3>
          <p className="education-item__location">{t('education.lidemy.location')}</p>
          <p className="education-item__degree">{t('education.lidemy.degree')}</p>
          <p className="education-item__date">{t('education.lidemy.date')}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
