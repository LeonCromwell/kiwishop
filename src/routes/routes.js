import config from '~/config';
import Home from '~/pages/Home';
import Store from '~/pages/Store';
import Contact from '~/pages/Contact';
import NewFruits from '~/pages/NewFruits';
import Auth from '~/pages/Auth';
import Cart from '~/pages/Cart';
import profile from '~/pages/Profile';
import CreateProduct from '~/pages/Admin/CreateProduct';

// import Register from '~/pages/Register';
import Layout1 from '~/layouts/Layout1';
import AdminLayout from '~/layouts/AdminLayout';
import ProductManager from '~/pages/Admin/ProductManager';
import ProductDetail from '~/pages/Admin/ProductDetail';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.store, component: Store },
    { path: config.routes.contact, component: Contact, layout: Layout1 },
    { path: config.routes.newfruits, component: NewFruits },
    { path: config.routes.cart, component: Cart, layout: Layout1 },
    { path: config.routes.auth, component: Auth, layout: Layout1 },
    { path: config.routes.profile, component: profile, layout: Layout1 },
    { path: config.routes.adminCreateProduct, component: CreateProduct, layout: AdminLayout },
    { path: config.routes.productmanager, component: ProductManager, layout: AdminLayout },
    { path: config.routes.productdetail, component: ProductDetail, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
