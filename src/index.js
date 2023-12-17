import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Contato from './Pages/Contato';
import Quiz from './Pages/Quiz';
import Sobre from './Pages/Sobre';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
const nome = "Visitante";
root.render(
  <React.StrictMode>
    <Router>
      <NavBar nome={nome}/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
