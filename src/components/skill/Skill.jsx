import React from 'react';
import { useI18n } from '../../i18n';

const Skill = () => {
  const { t } = useI18n();

  const designItems = t('skill.cards.design.items');
  const docsItems = t('skill.cards.docs.items');
  const techItems = t('skill.cards.tech.items');
  const softItems = t('skill.cards.soft.items');

  return (
    <section id="skill" className="section skill no-padding">
      <h4 className="section__title">{t('skill.title')}</h4>
      <div className="section__content">
        <div className="title">{t('skill.sectionDesign')}</div>
        <div className="section__container">
          <div className="card">
            <p><strong className="skill__name">{t('skill.cards.design.title')}</strong></p>
            <ul className="info skill__content">
              {(Array.isArray(designItems) ? designItems : []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">{t('skill.cards.docs.title')}</strong></p>
            <ul className="info skill__content">
              {(Array.isArray(docsItems) ? docsItems : []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="title">{t('skill.sectionTech')}</div>
        <div className="section__container">
          <div className="card">
            <p><strong className="skill__name">{t('skill.cards.tech.title')}</strong></p>
            <ul className="info skill__content">
              {(Array.isArray(techItems) ? techItems : []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p><strong className="skill__name">{t('skill.cards.soft.title')}</strong></p>
            <ul className="info skill__content">
              {(Array.isArray(softItems) ? softItems : []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
