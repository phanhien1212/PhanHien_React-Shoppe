import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LayoutSite = () => {
  return (
    <>
      <div class="app">
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  )
};

export default LayoutSite;