import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import './ModuleConfig';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import LocaleProvider from 'antd/lib/locale-provider';
import Router from './Router';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Router />
    </LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
