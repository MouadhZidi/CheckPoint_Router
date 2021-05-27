
import React ,{useState}from 'react';
import './App.css';
import MovieAdd from './component/MovieAdd';
import MovieList from './component/MovieList';
import SpinnerC from './component/SpinnerC';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MovieDesc from './component/MovieDesc';
import ReactPlayer from 'react-player';

function App() {
  
  const [films, setFilms] = useState([
    {
      id:1,
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
      video:"https://www.youtube.com/embed/KPLWWIOCOOQ",
    },
    {
      id:2,
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
      video:"https://www.youtube.com/embed/HhesaQXLuRY",
    },
    {
      id:3,
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
      video:"https://www.youtube.com/embed/d6kBeJjTGnY",
    },
  ])

  const add=(newMovie)=>{  
    setFilms([...films,newMovie])
  }

  
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Switch>
         <Route path='/' exact> 
              <SpinnerC/>
              <MovieList films={films}/>
              <MovieAdd add={add}/> 
        </Route>
        <Route path='/description/:id'>
            <MovieDesc films={films}/>
        </Route>
       </Switch>
       </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
