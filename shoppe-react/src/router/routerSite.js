
import Account from "../pages/frontend/Account.js";
import Cart from "../pages/frontend/Cart";
import Home from "../pages/frontend/Home";
import Banner from "../pages/frontend/Home/Banner";
import Order from "../pages/frontend/Order.js";
import ProductDetail from "../pages/frontend/ProductDetail.js";
const routerSite = [
  { path: '/', component: Home },
  { path: '/product-detail', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/account', component: Account },
  { path: '/order', component: Order },
];

export default routerSite;
