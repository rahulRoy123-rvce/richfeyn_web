import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Order from "./components/pages/Order";
import Works from "./components/individual/Works";
import RAE from "./components/pages/RAE";
import CoorInfo from "./components/pages/CoorInfo";
import TOU from "./components/pages/TOU";
import Faqs from "./components/pages/Faqs";
import Privacy from "./components/pages/Privacy";
import ContactUs from "./components/pages/ContactUs";
import Pricing from "./components/pages/Pricing";
import BannerHead from "./components/individual/BannerHead";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />
      <Routes>
        <Route path="pricing" element={<Layout children={<Pricing />} />} />
        <Route path="hiw" element={<Layout children={<Works />} />} />
        <Route path="rae" element={<Layout children={<RAE />} />} />
        <Route path="ci" element={<Layout children={<CoorInfo />} />} />
        <Route
          path="/"
          element={
            <>
              {/* <BannerHead /> */}
              <Layout children={<Home />} />
            </>
          }
        />
        <Route path="pricing" element={<Order />} />
        <Route path="Return_Exchange" element={<Layout children={<RAE />} />} />
        <Route
          path="CorporateInfo"
          element={<Layout children={<CoorInfo />} />}
        />
        <Route path="tou" element={<Layout children={<TOU />} />} />
        <Route path="faqs" element={<Layout children={<Faqs />} />} />
        <Route path="privacy" element={<Layout children={<Privacy />} />} />
        <Route path="contact" element={<Layout children={<ContactUs />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
