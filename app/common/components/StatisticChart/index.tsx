import React from 'react';
import CardTabs from '../CardTabs/index';
import './style.scss';

interface IProps {
    cardData: any[],
    chartData: any[]
}
interface IStates {}

class StatisticChart extends React.Component<IProps, IStates> {
    render() {
        const { cardData, chartData } = this.props;
        return (
            <div className="statisticchart-component-box">
                <div className="cartabs-box">
                    <CardTabs
                        cardData={cardData}
                    />
                </div>
            </div>
        );
    }
}

export default StatisticChart;
