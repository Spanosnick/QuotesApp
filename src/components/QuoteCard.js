import React, {useEffect, useState} from "react";
import '../QuoteCard.css';
import memeImage from '../meme.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {addToFavorites, removeFromFavorites, getTodayDate} from "../generalFunctions";

export function QuoteCard() {
    const [quote, setQuote] = useState("This is a quote");
    const [author, setAuthor] = useState("Nick Spanos");
    const url = "https://api.quotable.io/random";
    const storedDailyQuotes = localStorage.getItem('numberOfQuotes');
    const [dailyQuotes, setDailyQuotes] = useState(storedDailyQuotes ? Number(storedDailyQuotes) : 0);
    const [hasHeart, setHasHeart] = useState(false);


    // Load dailyQuotes from localStorage if the date is the same, otherwise reset
    useEffect(() => {
        const lastDate = localStorage.getItem('quoteLastDate');
        const today = getTodayDate();
        if (lastDate !== today) {
            setDailyQuotes(0);
            localStorage.setItem('numberOfQuotes', dailyQuotes);
            localStorage.setItem('quoteLastDate', getTodayDate());
        }


    }, [dailyQuotes]);

    // Fetch a new quote when dailyQuotes changes but only if it's less than 5
    useEffect(() => {
        if (dailyQuotes < 5) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setQuote(data.content);
                    setAuthor(data.author);
                });
            setHasHeart(false);
        }
        localStorage.setItem('numberOfQuotes', dailyQuotes);
        localStorage.setItem('quoteLastDate', getTodayDate());
    }, [dailyQuotes]);

    if (dailyQuotes > 4) {
        return <img className={'meme-image'} src={memeImage} alt="You have reached your daily limit"/>
    }

    function toogleFavourite() {
        setHasHeart(!hasHeart);
        if (hasHeart) {
            removeFromFavorites(quote);
        } else {
            addToFavorites({quote: quote, author: author});
        }
    }

    return (
        <div className="quote-card">
            <h3 className="quote-text">“{quote}”</h3>
            <small className="quote-author">- {author}</small>
            <div>
                <button disabled={dailyQuotes > 4} className={`quote-card-btn new  ${dailyQuotes > 4 && 'disabled'}`}
                        onClick={() => setDailyQuotes(prevState => prevState + 1)}>Generate New
                </button>
                <button className="quote-card-btn" onClick={toogleFavourite}
                        hasHeart={`${hasHeart}`}>{!hasHeart ? 'Add to' : 'Remove from'} Favourites <FontAwesomeIcon
                    icon={faHeart}/></button>
            </div>
        </div>

    )
}
