import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {}

class App extends Component<IProps> {
    handleRoute() {
        const { location, history } = this.props;
        const { pathname } = location;

        // 自动去首页
        if (pathname === '/') {
            history.replace('/index');
            return false;
        }
        return true;
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                { this.handleRoute() ? children : null}
            </div>
        );
    }
}

export default App;
