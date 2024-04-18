import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CreateAccount from "../Login/CreateAccount";
import LogIn from "../Login/LogIn";
import Cart from "../Cart/Cart";
import ItemDetails from "../ItemDetails/ItemDetails";
import YarnList from "../Home/YarnList";
import Searchresult from "../Search/Searchresult";

export default function Switch() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/yarn" element={<YarnList />} />
        <Route path="/yarn/details" element={<ItemDetails />} />
        <Route path="/searchresult" element={<Searchresult />} />
        <Route render={() => <h1>404: page not found</h1>} />
        {/* <Route path="*" element={<h1>404: page not found</h1>} /> */}
      </Routes>
    </div>
  );
}
