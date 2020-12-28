import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './style.scss';

interface IProps {
    type: string;
}
interface IStates {}

class Chart extends React.Component<IProps, IStates> {
    getOption = () => {
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
            }],
        };
        return option;
    }

    handleChartReady = () => {}

    render() {
        return (
            <div className="chart-component-box">
                <ReactEcharts
                    option={this.getOption()}
                    theme="theme_name"
                    onChartReady={this.handleChartReady}
                />
            </div>
        );
    }
}

export default Chart;
