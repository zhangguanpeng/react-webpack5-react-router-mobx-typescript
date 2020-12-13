import React from 'react';
import { marketItemType, marketItemChildType } from './types';
import './style.scss';

interface IProps extends marketItemType {}
interface IStates {}

class MarketCard extends React.Component<IProps, IStates> {
    handleMouseOver = () => {
        // this.setState({
        //     showImg: false,
        // });
    }

    handleMouseOut = () => {
        // this.setState({
        //     showImg: true,
        // });
    }

    render() {
        const { marketTitle, marketChildren, marketImgUrl } = this.props;
        console.log('marketChildren', marketChildren);
        return (
            <div
                className="marketcard-component-box"
                onMouseOut={this.handleMouseOut}
            >
                <div className="card-title">{marketTitle}</div>
                <div className="card-body">
                    {
                        marketChildren.map((marketChild: marketItemChildType, index: number) => (
                            <div className="market-item-child" key={`market-child${index.toString()}`}>
                                <span className="child-img">
                                    <img src={marketChild.imgUrl} alt="" />
                                </span>
                                <div className="child-name">{marketChild.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="card-img">
                    <img src={marketImgUrl} alt="" />
                </div>
            </div>
        );
    }
}

export default MarketCard;
