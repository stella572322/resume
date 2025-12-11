import React from 'react';
import ContactList from './../contactList/ContactList';
import { useI18n } from '../../i18n';

const Introduce = () => {
  const { t } = useI18n();
  return (
    <header className="resume-header">
      <div className="resume-header__avatar">
        <img
          src={`${process.env.PUBLIC_URL}/image/avata.jpg`}
          alt={t('introduce.avatarAlt')}
          onError={(e) => {
            e.currentTarget.src = `${process.env.PUBLIC_URL}/image/avatar.jpg`;
          }}
        />
      </div>
      <div className="resume-header__info">
        <h1 className="resume-header__name">{t('introduce.name')}</h1>
        {/* <p className="resume-header__title">Target：Product Manager</p> */}
        <p className="resume-header__subtitle">{t('introduce.subtitle')}</p>
        <ContactList />

      {/* <section id="about" className="resume-header__summary" aria-label="Profile ｜ 專業摘要">
        <h2 className="resume-header__summaryTitle">Profile ｜ 專業摘要</h2>
        <div className="summary-content">
          <p>
            具備 <strong>3 年以上政府級大型 B2B 系統</strong>產品規劃與設計經驗。擅長在複雜業務邏輯與多方利害關係人（Stakeholders）之間取得平衡，
            主導過 <strong>24+</strong> 項系統功能模組，成功將設計思維轉化為可落地的產品規格。
          </p>
          <p>
            核心優勢在於 <strong>「需求解構」與「跨團隊轉譯」</strong>：能將模糊的政策與業務需求轉化為高可行性的 PRD 與系統架構，
            有效降低至少 <strong>20%</strong> 以上的溝通成本與開發返工率。目標將企業級系統轉型經驗，投入 B2B 或 SaaS 產品開發。
          </p>
        </div>
      </section> */}
      </div>
    </header>
  );
};

export default Introduce;
