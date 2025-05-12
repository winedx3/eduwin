import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
// import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
// import Presentation from "views/Presentation.js";
// import AboutUs from "views/examples/AboutUs.js";
// import AddProduct from "views/examples/AddProduct.js";
// import BlogPost from "views/examples/BlogPost.js";
// import BlogPosts from "views/examples/BlogPosts.js";
// import ContactUs from "views/examples/ContactUs.js";
// import Discover from "views/examples/Discover.js";
// import Ecommerce from "views/examples/Ecommerce.js";
// import Error404 from "views/examples/Error404.js";
// import Error422 from "views/examples/Error422.js";
// import Error500 from "views/examples/Error500.js";
// import LandingPage from "views/examples/LandingPage.js";
// import LoginPage from "views/examples/LoginPage.js";
// import ProductPage from "views/examples/ProductPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
// import Settings from "views/examples/Settings.js";
// import TwitterRedesign from "views/examples/TwitterRedesign.js";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/eduwin/*" element={<Sections />} />
      <Route path="/sections/*" element={<Sections />} />
      {/*<Route path="/landing-page" element={<LandingPage />} />*/}
      {/*<Route path="/index" element={<Index />} />*/}
      {/*<Route path="/nucleo-icons" element={<NucleoIcons />} />*/}
      {/*<Route path="/presentation" element={<Presentation />} />*/}
      {/*<Route path="/about-us" element={<AboutUs />} />*/}
      {/*<Route path="/add-product" element={<AddProduct />} />*/}
      {/*<Route path="/blog-post" element={<BlogPost />} />*/}
      {/*<Route path="/blog-posts" element={<BlogPosts />} />*/}
      {/*<Route path="/contact-us" element={<ContactUs />} />*/}
      {/*<Route path="/discover" element={<Discover />} />*/}
      {/*<Route path="/e-commerce" element={<Ecommerce />} />*/}
      {/*<Route path="/error-404" element={<Error404 />} />*/}
      {/*<Route path="/error-422" element={<Error422 />} />*/}
      {/*<Route path="/error-500" element={<Error500 />} />*/}
      {/*<Route path="/login-page" element={<LoginPage />} />*/}
      {/*<Route path="/product-page" element={<ProductPage />} />*/}
      {/*<Route path="/profile-page" element={<ProfilePage />} />*/}
      {/*<Route path="/register-page" element={<RegisterPage />} />*/}
      {/*<Route path="/search-with-sidebar" element={<SearchWithSidebar />} />*/}
      {/*<Route path="/settings" element={<Settings />} />*/}
      {/*<Route path="/twitter-redesign" element={<TwitterRedesign />} />*/}
      <Route path="*" element={<Navigate to="/eduwin" replace />} />
    </Routes>
  </BrowserRouter>
);
