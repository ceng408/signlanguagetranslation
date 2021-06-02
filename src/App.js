import React from "react";
import {Link } from "react-router-dom";

import './App.css';
function App() {
  return (
    
    <div >
     
      <table className="Table" >
        <thead >
        <tr>
          <th className="th_logo"><Link to="/"><img  src="/images/Logo.png" alt="logo" /> </Link></th>
        </tr>
        <tr>
          <th className="th_hosgeldiniz"><img  src="/images/hosgeldiniz.png" alt="logo" /></th>
        </tr>
        <tr>
          <th><Link to="/page3"><button className="btn-1">Metinden Görüntüye Çeviri </button> </Link></th>
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