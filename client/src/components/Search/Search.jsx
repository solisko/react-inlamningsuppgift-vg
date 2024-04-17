import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";

export default function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchProducts } = useContext(ShopContext);

  const handleSearch = () => {
    fetchProducts(searchTerm);
    navigate("/searchresult");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here!"
        value={searchTerm}
        onChange={() => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}></button>
    </div>
  );
}
