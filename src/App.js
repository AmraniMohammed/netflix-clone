import './App.css';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone!!!</h1>
      <Row title="NETFLIX ORIGINAL" fetchurl={requests.fetchNetflixOriginals} />
      <Row title="Trending now" fetchurl={requests.fetchTrending} />
    </div>
  );
}

export default App;
