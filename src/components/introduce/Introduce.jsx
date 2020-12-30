import React from 'react';
import ContactList from './../contactList/ContactList';

const Introduce = () => (
  <section className="section no-border">
    <h1 className="name-title">YUXIANG SU</h1>
    <section className="introduce">
      <p><strong>嗨！ 我是 裕翔，一個還在自我精進的 Front-End Developer 🎅</strong></p>
      <p>
        Taipei <br />
        在前端的世界中持續尋寶，透過規劃構思出藍圖，並藉由程式去建築自己的想法。<br />
        參與 2020 程式導師計畫，從中獲取開啟前端大門的鑰匙
        </p>
    </section>
    <ContactList />
  </section>
);

export default Introduce;
