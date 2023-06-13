import ProductBody from "./components/ProductBody";
import NavBar from "./components/NavBar";
import WebHeading from "./components/WebHeading";
import { Button } from "react-bootstrap";
import "./App.css";
import Footer from "./components/footer/Footer";
import CartContextProvider from "./store/cartContext/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <div>
        <NavBar />
        <WebHeading />
        <ProductBody />

        <Button className="text-info cartBtn mt-2 " variant="dark">
          See Cart
        </Button>
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
