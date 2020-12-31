import React from 'react';
import MARKETSERVICE_CONFIG from 'common/constants/marketService';
import './style.scss';

interface IProps {}
interface IStates {}

class MarketingService extends React.Component<IProps, IStates> {
    handleServiceItemClick = (linkUrl: string) => {
        window.location.href = linkUrl;
    }

    render() {
        return (
            <div className="marketing-service-component-box">
                {
                    MARKETSERVICE_CONFIG.map((serviceItem, index) => (
                        <div
                            className="marketing-service-item"
                            key={`index-menuItem${index.toString()}`}
                            onClick={() => { this.handleServiceItemClick(serviceItem.link); }}
                        >
                            <img src={serviceItem.marketToolImgUrl} alt="" />
                            <div className="name">{serviceItem.marketToolTitle}</div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default MarketingService;
