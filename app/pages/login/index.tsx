import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Nav from 'common/components/Nav/index';
import Footer from 'common/components/Footer/index';
import Banner from './components/Banner/index';
import Login from './components/Login/index';
import HotTopics from './components/HotTopics/index';
import Marketing from './components/Marketing/index';
import HelpCenter from './components/HelpCenter/index';
import MarketTool from './components/MarketTool/index';
import './style.scss';

interface IProps extends RouteComponentProps {}

class LoginPage extends Component<IProps> {
    componentDidMount() {
        // const { history } = this.props;
        // console.log('this.props.history', history);
        console.log('登录页加载完成');
    }

    render() {
        return (
            <div className="login-page-box">
                <Nav />
                <div className="banner-login-box">
                    <div className="banner-wrap">
                        <Banner />
                    </div>
                    <div className="login-wrap">
                        <Login />
                    </div>
                </div>
                <div className="hot-topic-box">
                    <HotTopics />
                </div>
                <div className="marketing-box">
                    <Marketing />
                </div>
                <div className="help-center-box">
                    <HelpCenter />
                </div>
                <div className="market-tool-box">
                    <MarketTool />
                </div>
                <div className="footer-box">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default LoginPage;
