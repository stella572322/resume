import React from 'react';
import ContactList from './../contactList/ContactList';

const Introduce = () => (
  <section className="section no-border no-margin">
    <h1 className="name-title">Ssu Chieh Chen</h1>
    <section className="introduce">
      <p><strong>嗨！ 我是 思潔，一個還在自我精進的 UI/UX Designer 🎅</strong></p>
      <p>
        Taipei <br />
        在 UI/UX 的世界中持續尋寶，透過規劃構思出藍圖，並藉由程式去建築自己的想法。<br />
        參與 2022 UXY 計畫，從中獲取開啟 UI/UX 大門的鑰匙
        </p>
    </section>
    <ContactList />
  </section>
);

export default Introduce;
