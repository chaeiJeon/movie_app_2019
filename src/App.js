import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/Navigation"
function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" exact={true} component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  //주소가 /about이 추가되면 About으로 간다
  );
}

export default App;
