import './App.css';
import Row from './Components/Row';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchurl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
