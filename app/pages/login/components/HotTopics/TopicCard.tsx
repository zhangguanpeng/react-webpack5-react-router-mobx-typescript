import React from 'react';
import { Button } from 'antd';
/* eslint-disable */
import { RightOutlined } from '@ant-design/icons';
import { topicItemType } from './types';
import './style.scss';

interface IProps extends topicItemType {}
interface IStates {}

class TopicCard extends React.Component<IProps, IStates> {
    render() {
        const {
            title, subTitle, desc, imgUrl, jumpUrl,
        } = this.props;
        return (
            <div className="tocpiccard-component-box">
                <div className="left">
                    <div className="title">
                        {title}
                        <span>{subTitle}</span>
                    </div>
                    <div className="desc">{desc}</div>
                    <div className="jump-btn">
                        <Button size="small">
                            GO
                            <RightOutlined />
                        </Button>
                    </div>
                </div>
                <div className="right">
                    <img src="http://img4.sycdn.imooc.com/5f2d03ab0001a77605400720.jpg" alt="" />
                </div>
            </div>
        );
    }
}

export default TopicCard;
