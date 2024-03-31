import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div>
        <span><NavLink to = "/">Hem</NavLink></span>
        <span><NavLink to = "/create">Skapa konto</NavLink></span>
        <span><NavLink to = "/login">Logga in</NavLink></span>
        <span><NavLink to = "/basket">Varukorg</NavLink></span>
      </div>
    </nav>
  );
};
export default Navigation;
