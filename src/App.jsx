import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Switch from "./components/Header/Switch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
