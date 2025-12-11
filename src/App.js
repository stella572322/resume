import React, { Component } from 'react';

import Introduce from './components/introduce/Introduce';
import Highlights from './components/highlights/Highlights';
import Work from './components/work/Work';
import { Switch } from 'antd';
import { I18nContext } from './i18n';

import 'antd/dist/antd.css';
import './scss/index.scss';

class App extends Component {
  static contextType = I18nContext;

  state = {
    isDarkTheme: false,
  };

  setTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme,
    });
  };

  render() {
    const { isDarkTheme } = this.state;
    const { lang, setLang, t } = this.context;
    document.body.style.backgroundColor = isDarkTheme ? '#333' : '#f5f5f5';
    return (
      <div className={`wrapper ${isDarkTheme ? 'theme--dark' : ''}`}>
        <div className="app-controls">
          <Switch
            checkedChildren={t('app.controls.theme.eye')}
            unCheckedChildren={t('app.controls.theme.normal')}
            onChange={this.setTheme}
            defaultChecked
          />
          <Switch
            checked={lang === 'en'}
            checkedChildren={t('app.controls.lang.en')}
            unCheckedChildren={t('app.controls.lang.zh')}
            onChange={(checked) => setLang(checked ? 'en' : 'zh')}
          />
        </div>
        <main className='resume-container'>
          <Introduce />
          <div className='resume-main'>
            <Highlights />
            <Work />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
