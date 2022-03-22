import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import './index.css';

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Layout from './components/Layout';
import Contac from './components/Contac';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Layout>
          <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contac" element={<Contac />} />

          </Routes>
        </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


