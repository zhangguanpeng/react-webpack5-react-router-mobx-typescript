import React from 'react';
import { menuItemInfoType } from './types';
import './style.scss';

interface IProps {
    onClick?: () => void;
    menuItemInfo: menuItemInfoType;
}
// interface IStates {
//     message: string;
// }

class MenuItem extends React.Component<IProps> {
    componentDidMount() {}

    handelClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        const { menuItemInfo } = this.props;
        return (
            <div
                className="menuItem-component-box"
            >
                <div className="menuItem-title">{menuItemInfo.name}</div>
                <div className="bottom-line"> </div>
                {
                    menuItemInfo.children.length > 0 && (
                        <div className="menuChildren-box">
                            {
                                menuItemInfo.children.map((menuChild, index) => (
                                    <div
                                        className="menu-child"
                                        key={`menu-child${index.toString()}`}
                                    >
                                        <a href={menuChild.url}>{menuChild.label}</a>
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
