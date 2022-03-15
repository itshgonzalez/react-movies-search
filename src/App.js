import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'wouter';

import { MoviesContextProvider } from 'context/MoviesContext';

import { Routes } from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faArrowLeft,
    faStar as fasFaStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
library.add(fab, faSearch, faArrowLeft, farFaStar, fasFaStar);

function App() {
    return (
        <React.StrictMode>
            <MoviesContextProvider>
                <Router>
                    <Suspense fallback={false}>
                        <Switch>
                            {Routes.map((route, index) => (
                                <Route key={index} {...route} />
                            ))}
                        </Switch>
                    </Suspense>
                </Router>
            </MoviesContextProvider>
        </React.StrictMode>
    );
}

export default App;
