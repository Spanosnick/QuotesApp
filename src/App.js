import './App.css';
import {NavBar} from "./components/NavBar";
import {QuoteCard} from "./components/QuoteCard";
import {FavouriteModal} from "./components/FavouriteModal";
import {useState} from "react";

function App() {
    const [dynamicDisplay, setdynamicDisplay] = useState('none');

    function toogleDisplay() {
        if (dynamicDisplay === 'none') {
            setdynamicDisplay('block');
        } else {
            setdynamicDisplay('none');
        }
    }

    return (
        <div className="App">
            <NavBar modalHandler={toogleDisplay}/>
            <QuoteCard/>
            <FavouriteModal modalHandler={toogleDisplay} modalDisplay={dynamicDisplay}/>
        </div>
    );
}

export default App;
