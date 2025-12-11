import React from 'react';
import { useI18n } from '../../i18n';
import { RESUME_DOWNLOADS } from '../../config/resumeDownloads';

const ContactList = () => {
  const { lang, t } = useI18n();
  const resumeDownload = RESUME_DOWNLOADS[lang] || RESUME_DOWNLOADS.en;
  const resumeUrl = resumeDownload && resumeDownload.url;

  return (
    <div className="contact-info">
      <span className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        Taipei, Taiwan
      </span>
      <span className="contact-item">
        <i className="fas fa-phone-alt"></i>
        <a href="tel:+886-980-517-778">+886 980 517 778</a>
      </span>
      <span className="contact-item">
        <i className="fas fa-envelope"></i>
        <a href="mailto:yuxiangsu0220@gmail.com">yuxiangsu0220@gmail.com</a>
      </span>
      {resumeUrl ? (
        <span className="contact-item">
          <i className="fas fa-file-download"></i>
          <a href={resumeUrl} download={resumeDownload.filename} target="_blank" rel="noopener noreferrer">
            {t('resume.download')}
          </a>
        </span>
      ) : (
        <span className="contact-item contact-item--disabled">
          <i className="fas fa-file-download"></i>
          {t('resume.download')}
        </span>
      )}
    </div>
  );
};

export default ContactList;
