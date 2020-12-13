import React from 'react';
import { Carousel } from 'antd';
import './style.scss';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner-component-box">
                <Carousel autoplay>
                    <div>
                        <img src="assets/imgs/banner-apl.jpg" alt="" />
                    </div>
                    <div>
                        <img src="assets/imgs/banner-bdqx.jpg" alt="" />
                    </div>
                    <div>
                        <img src="assets/imgs/banner-kpal.jpg" alt="" />
                    </div>
                    <div>
                        <img src="assets/imgs/banner-jmy.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Banner;
