import React from 'react';
// import { Carousel } from 'antd';
import './style.scss';

interface IProps {
    name: string;
    value: string | number;
    persent: string | number;
    icon: string;
    isSelected: boolean;
    id: string;
    onClick: (id: string) => void;
}
interface IStates {}

class CardItem extends React.Component<IProps, IStates> {
    handleClick = (id: string) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(id);
        }
    }

    render() {
        const {
            name, value, persent, icon, id, isSelected,
        } = this.props;
        const cardItemStyle = isSelected ? 'carditem-component-box carditem-selected' : 'carditem-component-box';
        return (
            <div className={cardItemStyle} onClick={() => { this.handleClick(id); }}>
                <img className="icon" src={icon} alt="" />
                <div className="info">
                    <div className="name-persent">
                        <div className="name">{name}</div>
                        <div className="persent">{`${persent} %`}</div>
                    </div>
                    <div className="value">{value}</div>
                </div>
            </div>
        );
    }
}

export default CardItem;
