import { Routes, Route } from "react-router-dom";
import CreateAccount from "../Routes/CreateAccount";
import LogIn from "../Routes/LogIn";
import Basket from "../Routes/Basket";

export default function Switch() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/create" exact element={<CreateAccount />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/basket" exact element={<Basket />} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Routes>
    </div>
  );
}
