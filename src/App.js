import React from "react";
import {Link } from "react-router-dom";
import logo from './Pages/images/Logo.png';
import hosgeldiniz from './Pages/images/hosgeldiniz.png';
import './App.css';
function App() {
  return (
    
    <div className="Table"  >
     
      <table >
        <thead >
        <tr>
          <th className="th_logo"><Link to="/"><img src={logo} alt="Logo" /></Link></th>
        </tr>
        <tr>
          <th><br></br><br></br></th>
        </tr>
        <tr>
          <th className="th_hosgeldiniz"><img  src={hosgeldiniz} alt="logo" /></th>
        </tr>
        <tr>
          <th><br></br><br></br><br></br></th>
        </tr>
        <tr>
          <th><Link to="/page3"><button className="btn-1">Metinden Görüntüye Çeviri </button> </Link></th>
        </tr>
        <tr>
          <th><br></br></th>
        </tr>
        <tr>
        <th><Link to="/page2"><button className="btn-1">Görüntüden Metine Çeviri </button> </Link></th>
        </tr>
       </thead>
    </table>
  </div>
  );
  
}
export default App;