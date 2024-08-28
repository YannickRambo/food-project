import { Link } from "react-router-dom";

export function MenuHeader() {
    return (
        <header className="menuHeader">
            <h1>Menu</h1>
            <Link to="/create">Create Food</Link>
        </header>
    )
}