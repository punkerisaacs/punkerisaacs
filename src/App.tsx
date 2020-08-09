import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeView, NotFound404View } from './views';
import { Header } from './components';
import './App.css';

export default function App(): JSX.Element {
    return (
        <React.Fragment>
            {/*<div id="banner" />*/}
            <Header />
            <div id="content" className="background-color">
                <div id="content-body">
                    <Switch>
                        <Route path="/" component={HomeView} exact />
                        <Route component={NotFound404View} exact />
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
}
