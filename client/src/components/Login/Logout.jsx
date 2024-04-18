import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";
import { Button } from "../BootstrapComps/bootstrapComps";

export default function Logout() {
  const { handleLogout } = useContext(ShopContext);



  return <Button onClick={handleLogout}>Log out</Button>;
}
