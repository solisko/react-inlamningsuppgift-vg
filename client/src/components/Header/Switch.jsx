import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CreateAccount from "../Login/CreateAccount";
import LogIn from "../Login/LogIn";
import Cart from "../Cart/Cart";
import Profile from "../Login/Profile";
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/yarn" element={<YarnList />} />
        <Route path="/yarn/item" element={<ItemDetails />} />
        <Route path="/searchresult" element={<Searchresult />} />
        {/* <Route path="*" element={<h1>404: page not found</h1>} /> */}
      </Routes>
    </div>
  );
}
