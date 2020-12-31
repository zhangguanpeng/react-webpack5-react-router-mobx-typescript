import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Select } from 'antd';
import StatisticChart from 'common/components/StatisticChart/index';
import Account from './components/Account/index';
import IndexBanner from './components/IndexBanner/index';
import IndexNav from './components/Nav/index';
import PromotionProduct from './components/PromotionProduct/index';
import MarketingService from './components/MarketingService/index';
import ProductNews from './components/ProductNews/index';
import './style.scss';

interface IProps extends RouteComponentProps {}

const cardData:any = [
    {
        id: 1,
        name: '消费（元）',
        value: 1,
        persent: 88,
        icon: 'assets/imgs/card-icon1.png',
        isSelected: true,
    },
    {
        id: 2,
        name: '展现（次）',
        value: 1,
        persent: 88,
        icon: 'assets/imgs/card-icon2.png',
        isSelected: false,
    },
    {
        id: 3,
        name: '点击（次）',
        value: 1,
        persent: 88,
        icon: 'assets/imgs/card-icon3.png',
        isSelected: false,
    },
];
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
                        <div className="promotion-box">
                            <PromotionProduct />
                        </div>
                        <div className="service-box">
                            <div className="box-header">
                                <div className="title">营销服务</div>
                            </div>
                            <MarketingService />
                        </div>
                    </div>
                    <div className="right">
                        <div className="account-box">
                            <Account />
                        </div>
                        <div className="carousel-box">
                            <IndexBanner />
                        </div>
                        <div className="productnews-box">
                            <div className="box-header">
                                <div className="title">产品动态</div>
                                <div className="more">更多</div>
                            </div>
                            <div className="box-content">
                                <ProductNews />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">©2020 Baidu 使用百度前必读 京公网安备11000002000001号 互联网信息服务许可 我已阅读并接受百度推广服务合同 欢迎访问百度推广政策中心</div>
            </div>
        );
    }
}

export default IndexPage;
