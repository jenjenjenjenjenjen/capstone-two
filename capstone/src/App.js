import './App.css';
import MarsRoverHome from './components/MarsRoverHome';
import Navbar from './components/Navbar';
import Rover from './components/Rover';
import Missions from './components/Missions';
import PhotoOfTheDay from './components/PhotoOfTheDay';
import Epic from './components/Epic';
import MarsWeather from './components/MarsWeather';
import Eonet from './components/Eonet';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/potd'><PhotoOfTheDay /></Route>
        <Route exact path='/missions'><Missions /></Route>
        <Route exact path='/marsrover'><MarsRoverHome /></Route>
        <Route exact path='/marsrover/curiosity'><Rover name='curiosity' /></Route>
        <Route exact path='/marsrover/opportunity'><Rover name='opportunity'/></Route>
        <Route exact path='/marsrover/spirit'><Rover name='spirit' /></Route>
        <Route exact path='/marsrover/perseverance'><Rover name='perseverance'/></Route>
        <Route exact path='/epic'><Epic /></Route>
        <Route exact path='/marsweather'><MarsWeather /></Route>
        <Route exact path='/eonet'><Eonet /></Route>
        <Route exact path='/'><h1>Home</h1></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
