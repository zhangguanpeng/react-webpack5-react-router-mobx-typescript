import React from 'react';
import TOPICS_CONFIG from 'common/constants/hotTopics';
import TopicCard from './TopicCard';
import { topicItemType } from './types';
import './style.scss';

interface IProps {}
interface IStates {}

class HotTopics extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="topics-component-box">
                <div className="topics-header">
                    <div className="title">热门专题</div>
                    <div className="more">查看更多</div>
                </div>
                <div className="topics-body">
                    {
                        TOPICS_CONFIG.map((topicItem: topicItemType, index: number) => (
                            <TopicCard
                                title={topicItem.title}
                                subTitle={topicItem.subTitle}
                                desc={topicItem.desc}
                                imgUrl={topicItem.desc}
                                jumpUrl={topicItem.jumpUrl}
                                key={`topic-item${index.toString()}`}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default HotTopics;
