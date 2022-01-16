import "./App.css";
import SearchMain from './components/search-main/search-main.component';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_TEST_KEY;
  return (
    <div className="App">
      <SearchMain />
    </div>
  );
}

export default App;
