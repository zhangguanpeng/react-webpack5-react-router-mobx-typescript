import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Nav from 'common/components/Nav/index';
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
            </div>
        );
    }
}

export default LoginPage;
