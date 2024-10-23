import React from "react";
import '../NavBar.css';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function NavBar({modalHandler}) {
    return (
        <nav>
            <h1><span>Quote Of</span> The Day</h1>
            <FontAwesomeIcon className={'favBtn'}  onClick={modalHandler} size={'2xl'} icon={faHeart} />
        </nav>

    )
}
