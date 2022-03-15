import { lazy } from 'react';

const Home = lazy(() =>
    import('./Home').then((module) => ({ default: module.Home }))
);

const Detail = lazy(() =>
    import('./Detail').then((module) => ({ default: module.Detail }))
);

const NotFound = lazy(() =>
    import('./NotFound').then((module) => ({ default: module.NotFound }))
);

export { Home, Detail, NotFound };
