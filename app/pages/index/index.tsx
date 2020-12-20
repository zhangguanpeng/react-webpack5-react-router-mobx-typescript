import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Select } from 'antd';
import StatisticChart from 'common/components/StatisticChart/index';
import IndexNav from './components/Nav/index';
import './style.scss';

interface IProps extends RouteComponentProps {}

const cardData:any = [];
const chartData:any = [];
const { Option } = Select;
class IndexPage extends Component<IProps> {
    componentDidMount() {
        console.log('首页加载完成');
    }

    handleClick = () => {
        const { history } = this.props;
        console.log('this.props.history', history);
        history.push('/login');
    }

    handlePromotionChange = () => {
        const { history } = this.props;
        console.log('this.props.history', history);
        history.push('/login');
    }

    render() {
        return (
            <div className="index-page-box">
                <IndexNav />
                <div className="content">
                    <div className="left">
                        <div className="statisticchart-box">
                            <div className="box-header">
                                <div className="title">数据趋势</div>
                                <div className="select-area">
                                    <Select
                                        defaultValue="lucy"
                                        style={{ width: 120 }}
                                        onChange={this.handlePromotionChange}
                                        size="small"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                            </div>
                            <StatisticChart
                                cardData={cardData}
                                chartData={chartData}
                            />
                        </div>
                        <div className="promotion-box">推广入口</div>
                        <div className="service-box">营销服务</div>
                    </div>
                    <div className="right">
                        <div className="account-box">账户</div>
                        <div className="carousel-box">跑马灯</div>
                        <div className="productnews-box">产品动态</div>
                    </div>
                </div>
                <div className="footer">©2020 Baidu 使用百度前必读 京公网安备11000002000001号 互联网信息服务许可 我已阅读并接受百度推广服务合同 欢迎访问百度推广政策中心</div>
            </div>
        );
    }
}

export default IndexPage;
