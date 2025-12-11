import React from 'react';
import ContactList from './../contactList/ContactList';
import { useI18n } from '../../i18n';

const Contact = () => {
  const { t } = useI18n();
  const bodyLines = String(t('contact.body')).split('\n');

  return (
    <section id="contact" className="section contact-bttom no-border">
      <h4 className="section__title">{t('contact.title')}</h4>
      <p>
        {bodyLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < bodyLines.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </p>
      <ContactList />
    </section>
  );
};

export default Contact;
