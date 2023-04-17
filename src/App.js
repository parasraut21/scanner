// import React, { useState, useEffect } from 'react';

// function App() {
//   const [barcode, setBarcode] = useState('');

//   useEffect(() => {
//     function handleKeyDown(event) {
//       // Check if input is a digit
//       if (/[0-9]/.test(event.key)) {
//         setBarcode(prevBarcode => prevBarcode + event.key);
//       }
//     }

//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Scan a barcode:</h1>
//       <div>{barcode}</div>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Test from "./components/Test"
import { Provider } from 'react-redux';
import store from './store';
import Card from './components/Card';
import Footer from './components/Footer';
import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Cart from './components/Cart';
import Admin from './components/Admin';
export default function App() {

  return (
    <Provider store={store}>
      <Router >
    <div>
      <Navbar/>
      <Card />
      <Footer />
      <Routes>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route  path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
    </Router>
    </Provider>
  );
}