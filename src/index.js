import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Anasayfa from "./App";
import Goruntuden_Metne_Ceviri from "./Pages/Goruntuden_Metne_Ceviri";
import Metinden_Goruntuye_Ceviri from "./Pages/Metinden_Goruntuye_Ceviri";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Anasayfa} />
     <Route path="/page2" component={Goruntuden_Metne_Ceviri} />
    <Route path="/page3" component={Metinden_Goruntuye_Ceviri} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );