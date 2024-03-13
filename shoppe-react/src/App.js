
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routerApp from './router';
import LayoutSite from './layouts/LayoutSite';
import './CSS/base.css';
import './CSS/main.css';
import './CSS/grid.css';
import './CSS/responsive.css';
import './CSS/product-info.css';
import './CSS/product-cart.css';
import './CSS/account.css';
import './CSS/order.css';
import './fonts/fontawesome-free-6.1.1/css/all.min.css';
import LayoutAdmin from './layouts/LayoutAdmin';
import ChannelSeller from './layouts/ChannelSeller';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/seller" element={<ChannelSeller />}>
          {routerApp.routerSeller.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} key={index} />
          })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {routerApp.routerAdmin.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} key={index} />
          })}
        </Route>
        <Route path="/" element={<LayoutSite />}>
          {routerApp.routerSite.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} key={index} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
