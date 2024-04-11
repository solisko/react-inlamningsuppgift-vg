import { Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import CreateAccount from "../Routes/CreateAccount";
import LogIn from "../Routes/LogIn";
import Cart from "../Routes/Cart";
import Items from "../Items/Items";

export default function Switch() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" exact element={<CreateAccount />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/item" exact element={<Items />} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Routes>
    </div>
  );
}
