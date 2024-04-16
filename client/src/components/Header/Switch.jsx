import { Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import CreateAccount from "../Routes/CreateAccount";
import LogIn from "../Routes/LogIn";
import Cart from "../Routes/Cart";
import Items from "../Items/Items";
import Profile from "../Routes/Profile";
import Searchresult from "../Routes/Searchresult";

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
