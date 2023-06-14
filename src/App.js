import ProductBody from "./components/pages/store/ProductBody";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";

import NavBar from "./components/NavBar";
import {BrowserRouter as Router,Switch,Route ,Redirect } from "react-router-dom";
import WebHeading from "./components/WebHeading";


import Footer from "./components/footer/Footer";
import CartContextProvider from "./store/cartContext/CartContextProvider";


function App() {
  return (
    <Router>
    <CartContextProvider>
      <div>
        <NavBar />
        <WebHeading />
       

      
     

    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route  exact path="/store" component={ProductBody} />
          <Redirect to='/'/>
        </Switch>
        
        
        <Footer />
       
      </div>
    </CartContextProvider>
    </Router>
  );
}

export default App;
