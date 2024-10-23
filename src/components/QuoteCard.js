import React, {useEffect, useState} from "react";
import '../QuoteCard.css';
import memeImage from '../meme.png';

export function QuoteCard() {
    const [quote, setQuote] = useState("This is a quote");
    const [author, setAuthor] = useState("Nick Spanos");
    const url = "https://api.quotable.io/random";
    const [dailyQuotes, setDailyQuotes] = useState(0);


    useEffect(() => {
        if (dailyQuotes < 5) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setQuote(data.content);
                    setAuthor(data.author);
                })
        }

    }, [dailyQuotes]);

    if (dailyQuotes === 5) {
        return <img className={'meme-image'} src={memeImage} alt="You have reached your daily limit"/>
    }

    return (
        <div className="quote-card">
            <h3 className="quote-text">“{quote}”</h3>
            <small className="quote-author">- {author}</small>
            <div>
                <button disabled={dailyQuotes > 4} className={`quote-card-btn new  ${dailyQuotes > 4 && 'disabled'}`}
                        onClick={() => setDailyQuotes(prevState => prevState + 1)}>Generate New
                </button>
                <button className="quote-card-btn">Add to Favourites</button>
            </div>
        </div>
    )
}
