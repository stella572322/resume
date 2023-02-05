import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

const AnchorMenu = () => {
  const preventClick = e => {
    e.preventDefault();
  };

  return (
    <Anchor offsetTop={50} targetOffset={60} onClick={preventClick}>
      <Link href="#skill" title="Skill" />
      <Link href="#project" title="Project" />
      <Link href="#work" title="Experience" />
      <Link href="#education" title="Education" />
      <Link href="#about" title="About Me" />
      <Link href="#contact" title="Contact" />
    </Anchor >
  );
};

export default AnchorMenu;
