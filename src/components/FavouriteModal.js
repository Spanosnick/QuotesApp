import React, {useEffect, useState} from "react";
import '../FavouriteModal.css';
import { removeFromFavorites} from "../generalFunctions";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function FavouriteModal({modalHandler, modalDisplay}) {
    const [favouriteQuotes, setFavouriteQuotes] = useState(null);
    const [countFavActions, setcountFavActions] = useState(0);

    useEffect(() => {
        let storedFavourites = localStorage.getItem('dailyQuotes');
        if (storedFavourites) {
            setFavouriteQuotes(JSON.parse(storedFavourites));
        }

    }, [modalDisplay,countFavActions]);


    return (
        <div className='FavouriteModal' style={{display: modalDisplay}}>
            <button className='closeBtn' onClick={modalHandler}>X</button>
            <h1 className='ModalTitle'>Your Favourite Quotes</h1>
            {favouriteQuotes !== null && favouriteQuotes.map((quote, index) => {
                return (
                    <div key={index} className='quoteContainer'>
                        <p className='quote'>` {quote.quote} `</p>
                        <p className='author'>{quote.author}</p>
                        <FontAwesomeIcon className='removeBtn' onClick={() => {
                            removeFromFavorites(quote.quote);
                            setcountFavActions((prevState) => prevState + 1);
                        }} icon={faHeart} size={'xl'}   />
                    </div>)
            })}
            {favouriteQuotes === null && <p>No Favourites Quotes</p>  }

        </div>
    );
}
