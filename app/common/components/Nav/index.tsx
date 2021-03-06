import React from 'react';
import { MENU_CONFIG } from 'common/constants/menu';
import MenuItem from './components/MenuItem/index';
import './style.scss';

interface IProps {
    onClick?: () => void;
}
interface IStates {}

class Nav extends React.Component<IProps, IStates> {
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
                className="nav-component-box"
            >
                <div className="logo"> </div>
                <div className="menu">
                    {
                        MENU_CONFIG.map((menuItem, index) => (
                            <MenuItem
                                menuItemInfo={menuItem}
                                key={`menuItem${index.toString()}`}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Nav;
