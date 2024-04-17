import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Search/search.module.css";

export default function Search() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        navigate("/searchresult", { state: { searchTerm } });
    };

    return (
        <div>
            <input
                type="text"
                className={styles.input}
                placeholder="Search for yarn here!"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
