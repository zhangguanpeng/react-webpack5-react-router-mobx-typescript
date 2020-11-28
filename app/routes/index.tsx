import React, { Component } from 'react';
import {
    HashRouter as Router, Route, withRouter, Link,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import IndexPage from 'pages/index/index';
import LoginPage from 'pages/login/index';
import App from '../App';

function NoMatch() {
    return (
        <div>未匹配</div>
    );
}

const allRoutes = [
    {
        path: '/index',
        exact: true,
        component: IndexPage,
        title: '',
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        title: '用户登录',
    },
    {
        path: '/about',
        exact: true,
        component: LoginPage,
        title: '用户登录',
    },
];

const AppWrap = withRouter(App);

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Router>
                    <AppWrap>
                        {
                            renderRoutes(allRoutes.map((item) => ({ ...item, key: item.path })))
                        }
                    </AppWrap>
                </Router>
            </div>
        );
    }
}

export default AppRoute;
