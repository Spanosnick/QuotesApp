import React from "react";
import '../NavBar.css';

export function NavBar({modalHandler}) {
    return (
        <nav>
            <h1><span>Quote Of</span> The Day</h1>
            <button onClick={modalHandler}>Favourites</button>
        </nav>

    )
}
