import ProductBody from "./components/pages/store/ProductBody";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import ProductDetails from "./components/pages/store/ProductDetails/ProductDetails";
import AuthcontextProvider from "./store/authContext/AuthcontextProvider";
import CartItemContextProvider from "./store/CartItemContext/CartItemContextProvider";
import Footer from "./components/footer/Footer";
import CartContextProvider from "./store/cartContext/CartContextProvider";
import ProductDetailsContextProvider from "./store/productDetailsContext/ProductDetailsContextProvider";
import WebHeadingExtend from "./components/pages/home/WebHeadingExtend";

function App() {
  return (
    <Router>
      <AuthcontextProvider>
        <CartItemContextProvider>
          <ProductDetailsContextProvider>

            <CartContextProvider>
              <div>
                <NavBar />
               

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/store" component={ProductBody} />
                  <Route path="/store/:id" component={ProductDetails} />
                  <Route exact path="/contactus" component={ContactUs} />
                  <Route exact path="/auth" component={AuthPage} />
                  <Redirect to="/" />
                </Switch>

                <Footer />
              </div>
            </CartContextProvider>

          </ProductDetailsContextProvider>
        </CartItemContextProvider>
      </AuthcontextProvider>
    </Router>
  );
}

export default App;
