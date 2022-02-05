import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
}

export default App;
