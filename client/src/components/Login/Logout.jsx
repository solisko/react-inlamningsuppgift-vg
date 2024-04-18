import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";
import { Button } from "../BootstrapComps/bootstrapComps";

export default function Logout() {
  const { loggedIn, setLoggedIn } = useContext(ShopContext);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setLoggedIn(false);
        console.log("Logged out successfully!", data);
      } else {
        throw new Error("Failed to logout.");
      }
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return <Button onClick={handleLogout}>Log out</Button>;
}
