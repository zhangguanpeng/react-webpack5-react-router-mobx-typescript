import React from 'react';
import { MENU_INDEX_CONFIG } from 'common/constants/menu';
import MenuItem from './MenuItem';
import './style.scss';

interface IProps {
    onClick?: () => void;
}
interface IStates {}

class IndexNav extends React.Component<IProps, IStates> {
    state = {}

    componentDidMount() {}

    handelClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        return (
            <div
                className="index-nav-component-box"
            >
                <div className="left">
                    <div className="logo"> </div>
                    <div className="menu">
                        {
                            MENU_INDEX_CONFIG.map((menuItem, index) => (
                                <MenuItem
                                    menuItemInfo={menuItem}
                                    isActive={menuItem.isActive}
                                    key={`index-menuItem${index.toString()}`}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="right"> </div>
            </div>
        );
    }
}

export default IndexNav;
