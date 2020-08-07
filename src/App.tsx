import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeView } from './views';
import { Header } from './components';
import './App.css';

export default function App(): JSX.Element {
    return (
        <div className="container-fluid app">
            <Header />
            <Switch>
                <Route path="/" component={HomeView} exact />
            </Switch>
        </div>
    );
}
