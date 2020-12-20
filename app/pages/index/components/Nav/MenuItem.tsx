import React from 'react';
/* eslint-disable */
import { ShareAltOutlined } from '@ant-design/icons';
import { menuItemInfoType } from './types';
import './style.scss';

interface IProps {
    isActive?: boolean;
    onClick?: () => void;
    menuItemInfo: menuItemInfoType;
}

class MenuItem extends React.Component<IProps> {
    componentDidMount() {}

    handelClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        const { menuItemInfo, isActive } = this.props;
        return (
            <div
                className="index-menuItem-component-box"
            >
                <div className="menuItem-title">
                    {menuItemInfo.name}
                    {
                        menuItemInfo.menuChildren.length > 0 && (<span className="arrow-icon"> </span>)
                    }
                </div>
                <div className="bottom-line"> </div>
                {
                    isActive && (
                        <div className="bottom-line-active"> </div>
                    )
                }
                {
                    menuItemInfo.menuChildren.length > 0 && (
                        <div className="menuChildren-box">
                            {
                                menuItemInfo.menuChildren.map((menuChild: any, index: number) => (
                                    <div
                                        className="menu-child"
                                        key={`menu-child${index.toString()}`}
                                    >
                                        <a href={menuChild.url}>{menuChild.label}</a>
                                        <ShareAltOutlined />
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default MenuItem;
