import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Search/search.module.css";
import { Button, Nav } from "../BootstrapComps/bootstrapComps";

export default function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a searchterm.");
    } else {
      navigate("/searchresult", { state: { searchTerm } });
    }
  };

  return (
    <Nav>
      <input
        type="text"
        className={styles.input}
        placeholder="Search for yarn here!"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-warning" onClick={handleSearch}>
        Search
      </Button>
    </Nav>
  );
}
