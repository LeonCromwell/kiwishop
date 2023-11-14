
import config from '~/config';
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Contact from '~/pages/Contact';
import NewFruits from '~/pages/NewFruits';
import Auth from '~/pages/Auth';
import Cart from '~/pages/Cart';
// import Register from '~/pages/Register';
import Layout1 from '~/layouts/Layout1';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.store, component: Store },
    { path: config.routes.contact, component: Contact, layout: Layout1 },
    { path: config.routes.newfruits, component: NewFruits },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.auth, component: Auth, layout: Layout1},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
