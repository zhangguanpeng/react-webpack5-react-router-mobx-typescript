import React from 'react';
import MARKET_CONFIG from 'common/constants/markets';
import { marketItemType } from './types';
import MarketCard from './MarketCard';
import './style.scss';

interface IProps {}
interface IStates {
    showImg: boolean;
}

class Marketing extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="marketing-component-box">
                {
                    // @ts-ignore
                    MARKET_CONFIG.map((marketItem: marketItemType, index: number) => (
                        <MarketCard
                            key={`market${index.toString()}`}
                            marketTitle={marketItem.marketTitle}
                            marketChildren={marketItem.marketChildren}
                            marketImgUrl={marketItem.marketImgUrl}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Marketing;
