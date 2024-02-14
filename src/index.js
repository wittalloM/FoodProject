import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Navbar from './componentes/Navbar/NavBar';
import Home from './pages/Home.jsx'
import Footer from './componentes/Footer/Footer.jsx'
<script src="https://kit.fontawesome.com/6fbc2ca5fd.js" crossorigin="anonymous"></script>
//Componentes;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar/>
   <Home />
   <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
