import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from 'containers/Header';
import { Main } from 'pages/Main';
import { PcList } from 'pages/PcList';
import { ProcessorList } from 'pages/ProcessorList';

import './App.scss';

export const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="layout">
                    <Switch>
                        <Route path={'/processor'}>
                            <ProcessorList />
                        </Route>
                        <Route path={'/pc'}>
                            <PcList />
                        </Route>
                        <Route path={''}>
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
