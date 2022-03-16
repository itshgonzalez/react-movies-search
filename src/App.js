import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'wouter';

import { MoviesContextProvider } from 'context/MoviesContext';

import { Routes } from './routes';

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
