import config from '~/config';
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Contact from '~/pages/Contact';
import NewFruits from '~/pages/NewFruits';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.store, component: Store },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.newfruits, component: NewFruits },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
