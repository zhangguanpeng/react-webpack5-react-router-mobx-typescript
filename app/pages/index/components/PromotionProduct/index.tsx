import React from 'react';
import ProductCard from './ProductCard';
import './style.scss';

interface IProps {}
interface IStates {}

const productData = [
    {
        name: '搜索推广',
        cost: 1,
        budget: 100,
        status: 1,
        desc: '',
    },
    {
        name: '信息流推广',
        cost: 1,
        budget: 100,
        status: 0,
        desc: '信息流推广借助大数据、用户需求定向和智能投放等技术，通过百度APP、百度贴吧、好看视频等资讯流帮您触达高潜用户。',
    },
    {
        name: '阿拉丁推广',
        cost: 1,
        budget: 100,
        status: 0,
        desc: '',
    },
    {
        name: '知识营销',
        cost: 1,
        budget: 100,
        status: 0,
        desc: '',
    },
];

class PromotionProduct extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="promotion-product-component-box">
                {
                    productData.map((productItem) => (
                        <ProductCard />
                    ))
                }
            </div>
        );
    }
}

export default PromotionProduct;
