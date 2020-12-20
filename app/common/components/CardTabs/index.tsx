import React from 'react';
// import { Carousel } from 'antd';
import './style.scss';

interface IProps {
    cardData: any[];
}
interface IStates {}

class CardTabs extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="cardtabs-component-box"> </div>
        );
    }
}

export default CardTabs;
