import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import IndexNav from './components/Nav/index';
import './style.scss';

interface IProps extends RouteComponentProps {}

class IndexPage extends Component<IProps> {
    componentDidMount() {
        console.log('首页加载完成');
    }

    handleClick = () => {
        const { history } = this.props;
        console.log('this.props.history', history);
        history.push('/login');
    }

    render() {
        return (
            <div className="index-page-box">
                <IndexNav />
                <div className="content">
                    <div className="left">left</div>
                    <div className="right">right</div>
                </div>
            </div>
        );
    }
}

export default IndexPage;
