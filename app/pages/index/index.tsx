import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Card from './components/card/index';
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
                这里是首页
                <Card onClick={this.handleClick} />
            </div>
        );
    }
}

export default IndexPage;
