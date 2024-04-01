import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContextProvider";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navigation />
          <Switch />
        </BrowserRouter>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
