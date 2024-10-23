// quoteUtils.js
export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Extracts the date portion
};

export const addToFavorites = (quoteObject) => {
    let localStorageObject = JSON.parse(localStorage.getItem('dailyQuotes'));
    if (!localStorageObject) {
        localStorageObject = [];
    }
    localStorageObject.push(quoteObject);
    localStorage.setItem('dailyQuotes', JSON.stringify(localStorageObject));
    localStorage.setItem('quoteLastDate', getTodayDate());
};

export const removeFromFavorites = (textQuote) => {
    let localStorageObject = JSON.parse(localStorage.getItem('dailyQuotes'));
    if (localStorageObject) {
        let filteredArray = localStorageObject.filter((quote) => {
            return quote.quote !== textQuote;
        });
        localStorage.setItem('dailyQuotes', JSON.stringify(filteredArray));
        localStorage.setItem('quoteLastDate', getTodayDate());
    }
};
