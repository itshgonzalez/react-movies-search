import { HOME_PATH, DETAIL_PATH, NOT_FOUND_PATH } from './routes';

import { Home, Detail, NotFound } from '../pages';

export const Routes = [
    {
        path: HOME_PATH,
        component: Home,
    },
    {
        path: DETAIL_PATH,
        component: Detail,
    },
    {
        path: NOT_FOUND_PATH,
        component: NotFound,
    },
];
