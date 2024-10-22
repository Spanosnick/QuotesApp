import React from "react";
import '../QuoteCard.css';

export function QuoteCard() {
    return (
        <div className="quote-card">
            <h3 className="quote-text">“The greatest glory in living lies not in never falling, but in rising every time we fall.”</h3>
            <small className="quote-author">- Nelson Mandela</small>
            <div>
                <button className="quote-card-btn new">Generate New</button>
                <button className="quote-card-btn">Add to Favourites</button>
            </div>

        </div>
    )
}
