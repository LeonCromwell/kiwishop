import config from '~/config';
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Contact from '~/pages/Contact';
import NewFruits from '~/pages/NewFruits';
import User from '~/pages/User';
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.store, component: Store },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.newfruits, component: NewFruits },
    { path: config.routes.user, component: User },
    { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
