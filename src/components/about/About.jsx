import React from 'react';
import { useI18n } from '../../i18n';

const About = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="main-section summary-section">
      <h4 className="main-section__title">{t('about.title')}</h4>
      <div className="summary-content">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
      </div>
    </section>
  );
};

export default About;
