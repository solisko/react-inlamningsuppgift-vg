import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Switch from "./components/Header/Switch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
