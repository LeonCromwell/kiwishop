import config from '~/config';
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.store, component: Store },
    { path: config.routes.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
