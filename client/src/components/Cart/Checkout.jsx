import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
import {Button} from "../BootstrapComps/bootstrapComps"

export default function Checkout() {
  const { getCartItemsArray } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const cartItemsArrayStr = getCartItemsArray();
    const cartItemsArrayInt = cartItemsArrayStr.map(Number);

    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ yarnIDs: cartItemsArrayInt }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create order: ${errorMessage}`);
      }
      console.log("Order sent successfully!");
    } catch (error) {
      console.error("There was an error creating the order:", error.message);
    }
  };

  return <Button variant="warning" onClick={handleCheckout}>Checkout</Button>;
}
