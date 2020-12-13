import React from 'react';
import { Input, Button } from 'antd';
/* eslint-disable */
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import './style.scss';

interface IProps {}

interface IStates {
    loginMode: number;
}

const loginModeMap: any = {
    1: '扫码登录',
    2: '账号登录',
};

class Login extends React.Component<IProps, IStates> {
    state = {
        loginMode: 1,
    }

    switchLoginMode = () => {
        const { loginMode } = this.state;
        this.setState({
            loginMode: loginMode === 1 ? 2 : 1,
        });
    }

    render() {
        const { loginMode } = this.state;
        return (
            <div className="login-component-box">
                <div className="login-header">
                    <div className="mode-text">{loginModeMap[loginMode]}</div>
                    <div className="switch-btn" onClick={this.switchLoginMode}>
                        {
                            loginMode === 1 ? (
                                <span className="account-text">{loginModeMap[2]}</span>
                            ) : (
                                <span className="qr-text">{loginModeMap[1]}</span>
                            )
                        }
                    </div>
                </div>
                <div className="login-body">
                    {
                        loginMode === 1 ? (
                            <div className="qrcode-login-box">
                                <img src="assets/imgs/login-qrcode.png" alt="" />
                            </div>
                        ) : (
                            <div className="account-login-box">
                                <div className="form-box">
                                    <div className="account-input">
                                        <Input size="large" placeholder="用户名" prefix={<UserOutlined />} />
                                    </div>
                                    <div className="password-input">
                                        <Input.Password size="large" placeholder="密码" prefix={<UnlockOutlined />} />
                                    </div>
                                    <div className="login-btn">
                                        <Button size="large"> 登 录 </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="login-footer">
                    <div className="left"><a href="http://">常见问题</a></div>
                    <div className="right">
                        <span><a href="http://">注册 | </a></span>
                        <span><a href="http://">忘记密码 | </a></span>
                        <span><a href="http://">加入百度营销</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
