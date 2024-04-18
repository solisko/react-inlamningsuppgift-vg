import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Search/search.module.css";
import {Button}from "../BootstrapComps/bootstrapComps"

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
            <Button variant="outline-warning" onClick={handleSearch}>Search</Button>
        </div>
    );
}
