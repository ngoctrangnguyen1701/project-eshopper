import Home from '../Pages/Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import ProductsByCategory from '../Pages/ProductsByCategory/ProductsByCategory';
import Cart from '../Pages/Cart/Cart';
import Page404 from '../Pages/Page404/Page404';
import BlogList from '../Pages/Blog/BlogList';
import BlogSingle from '../Pages/Blog/BlogSingle';
import Contact from '../Pages/Contact/Contact';
import Auth from '../Pages/Auth/Auth';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/products/:id',
        exact: true,
        component: ProductDetails
    },
    {
        path: '/category/:categoryName',
        exact: true,
        component: ProductsByCategory
    },
    {
        path: '/cart',
        exact: true,
        component: Cart
    },
    {
        path: '/blog-list',
        exact: true,
        component: BlogList
    },
    {
        path: '/blog-single',
        exact: true,
        component: BlogSingle
    },
    {
        path: '/contact',
        exact: true,
        component: Contact
    },
    {
        path: '/cart',
        exact: true,
        component: Cart
    },
    {
        path: '/auth',
        exact: true,
        component: Auth
    },
    {
        path: '*',
        exact: false,
        component: Page404
    },
];

export default routes;