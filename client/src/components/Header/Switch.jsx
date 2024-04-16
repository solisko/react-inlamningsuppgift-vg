import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CreateAccount from "../Login/CreateAccount";
import LogIn from "../Login/LogIn";
import Cart from "../Cart/Cart";
import Items from "../ItemDetails/ItemDetails";
import Profile from "../Login/Profile";
import Searchresult from "../Search/Searchresult";

export default function Switch() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" exact element={<CreateAccount />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/searchresult" exact element={<Searchresult/>}/>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/item" exact element={<Items />} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Routes>
    </div>
  );
}
