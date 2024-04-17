import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";

export default function Searchresult() {
  const { products, fetchProducts } = useContext(ShopContext);

  return (
    <div>
      <h2>Search Result</h2>
      <div></div>
    </div>
  );
}
