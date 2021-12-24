import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from 'containers/Header';
import { Main } from 'pages/Main';

import './App.scss';

export const App: React.FC = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Route path={''}>
                    <Main />
                </Route>
            </div>
        </Router>
    );
};
