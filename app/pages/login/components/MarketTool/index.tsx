import React from 'react';
import MARKETTOOL_CONFIG from 'common/constants/marketTools';
import { marketToolItemType } from './types';
import './style.scss';

interface IProps {}
interface IStates {}

class MarketTool extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="markettool-component-box">
                <div className="markettool-header">营销工具</div>
                <div className="markettool-body">
                    {
                        MARKETTOOL_CONFIG.map((marketToolItem: marketToolItemType, index: number) => (
                            <div
                                className="markettool-item-box"
                                key={`markettool-item${index.toString()}`}
                            >
                                <img src={marketToolItem.marketToolImgUrl} alt="" />
                                <div className="markettool-item-title">{marketToolItem.marketToolTitle}</div>
                                <div className="markettool-item-subtitle">{marketToolItem.marketToolSubTitle}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default MarketTool;
