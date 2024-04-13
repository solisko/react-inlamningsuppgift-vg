import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContextProvider";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page-container">
      <ShopContextProvider>
        <BrowserRouter>
          <Navigation />
          <div className="content-wrapper">
            <Switch />
          </div>
        </BrowserRouter>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
