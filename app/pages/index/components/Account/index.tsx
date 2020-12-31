import React from 'react';
import { Button } from 'antd';
import './style.scss';

interface IProps {}
interface IStates {}

class Account extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="account-component-box">
                <div>你好，上古鹏</div>
                <div className="examine">
                    <div className="status">开户金未到</div>
                </div>
                <div className="balance">
                    <div>
                        <div className="text">推广余额</div>
                        <div className="value">0</div>
                    </div>
                    <Button type="primary" size="small">充值</Button>
                </div>
                <div className="credit">
                    <div>
                        <div className="text">合规信用值</div>
                        <div className="value"> - </div>
                    </div>
                    <div className="detail-text">详情</div>
                </div>
            </div>
        );
    }
}

export default Account;
