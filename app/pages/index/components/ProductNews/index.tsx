import React from 'react';
import { Carousel } from 'antd';
import {
    newsData1, newsData2, newsData3, newsData4,
} from 'common/constants/news';
import './style.scss';

interface IProps {}
interface IStates {}

class ProductNews extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="product-news-component-box">
                <Carousel autoplay>
                    <div className="news-list">
                        {
                            newsData1.map((newsItem, index) => (
                                <div className="news-item" key={`news-item-${index.toString()}`}>
                                    <div className="title">{newsItem.title}</div>
                                    <div className="other-info">
                                        <div className="source">{newsItem.time}</div>
                                        <div className="time">{newsItem.time}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="news-list">
                        <img src="assets/imgs/index-banner2.png" alt="" />
                    </div>
                    <div className="news-list">
                        <img src="assets/imgs/index-banner3.png" alt="" />
                    </div>
                    <div className="news-list">
                        <img src="assets/imgs/index-banner4.png" alt="" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ProductNews;
