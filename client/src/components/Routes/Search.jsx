import { NavLink } from "react-router-dom";

export default function Search() {
  return (
    <div>
      <input type="text" />
      <button>
        <NavLink style={{ textDecoration: "none" }} to="/searchresult">
          Sök
        </NavLink>
      </button>
    </div>
  );
}
