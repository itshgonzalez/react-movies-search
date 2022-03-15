import Detail from 'pages/Detail';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

export const Routes = [
    {
        component: Home,
        path: '/',
        exact: true,
    },
    {
        component: Detail,
        path: '/movie/:movieId',
    },
    {
        component: NotFound,
    },
];
