import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
                这里是登录页
            </div>
        );
    }
}

export default LoginPage;
