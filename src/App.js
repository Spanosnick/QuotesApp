import './App.css';
import {NavBar} from "./components/NavBar";
import {QuoteCard} from "./components/QuoteCard";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <QuoteCard/>
        </div>
    );
}

export default App;
