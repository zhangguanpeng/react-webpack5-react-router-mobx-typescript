import React from 'react';
import HELPCENTER_CONFIG from 'common/constants/helpcenter';
import { helpItemType } from './types';
import './style.scss';

interface IProps {}
interface IStates {}

class HelpCenter extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="helpcenter-component-box">
                <div className="helpcenter-header">帮助中心</div>
                <div className="helpcenter-body">
                    {
                        HELPCENTER_CONFIG.map((helpItem: helpItemType, index: number) => (
                            <div
                                className="help-item-box"
                                key={`help-item${index.toString()}`}
                            >
                                <div className="help-item-title">{helpItem.title}</div>
                                {
                                    helpItem.helpChildren.map((helpChild, subIndex) => (
                                        <div
                                            className="help-item-child"
                                            key={`help-child${subIndex.toString()}`}
                                        >
                                            <a href={helpChild.link}>{helpChild.label}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default HelpCenter;
