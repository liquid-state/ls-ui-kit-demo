import React, { Component } from 'react';
import { List, Layout } from 'antd';
import { createHashHistory } from 'history';
import { Switch } from 'react-router-dom';
import createApp from '@liquid-state/iwa-core';
import { Router, Route, Link } from './routing';
import './App.css';
import definition from './webapp.json';

import General from './pages/general';
import LSMobile from './pages/ls-mobile';

class App extends Component {
    render() {
        const app = process.env.NODE_ENV === 'production' ? createApp(definition) : null;
        return (
            <div className="App">
                <Layout>
                    <Layout.Content>
                        <Router app={app} historyFactory={createHashHistory}>
                            <Switch>
                                <Route path="/" exact component={Index} />
                                <Route path="/general" component={General} />
                                <Route path="/ls-mobile" component={LSMobile} />
                            </Switch>
                        </Router>
                    </Layout.Content>
                </Layout>
            </div>
        );
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <List header={<h2>General</h2>}>
                    <List.Item><Link to="/general/buttons">Buttons</Link></List.Item>
                    <List.Item><Link to="/general/icons">Icons</Link></List.Item>
                </List>
                <List header={<h2>Navigation</h2>}>
                    <List.Item><Link to="/navigation/pagination">Pagination</Link></List.Item>
                    <List.Item><Link to="/navigation/steps">Steps</Link></List.Item>
                </List>
                <List header={<h2>LS Mobile</h2>}>
                    <List.Item><Link to="/ls-mobile/slider">Slider</Link></List.Item>
                </List>
            </div>
        );
    }
}

export default App;
