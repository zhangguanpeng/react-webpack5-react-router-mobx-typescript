import React from 'react';
import { getUrlParam } from 'common/url';
import './style.scss';

interface IProps {
    onClick?: () => void;
}
interface IStates {
    message: string;
}

class Card extends React.Component<IProps, IStates> {
    state = {
        message: '点这里去登录页',
    }

    componentDidMount() {
        console.log('getUrlParam id', getUrlParam('id'));
    }

    handelClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        const { message } = this.state;
        return (
            <div
                className="card-component-box"
            >
                <span onClick={this.handelClick}>{ message }</span>
            </div>
        );
    }
}

export default Card;
