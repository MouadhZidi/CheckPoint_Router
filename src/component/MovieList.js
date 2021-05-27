import React,{useState} from 'react'
import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';


function MovieList({films}) {

    const [text, settext] = useState('')
    const [rate, setrate] = useState('')

    const filterText=(text)=>{
        settext(text)

    }

    const filterRate=(rate)=>{
        setrate(rate)
    }
    return (
        
        <div>
            <h1>React App Movie </h1>
            <MovieFilter filterText={filterText} filterRate={filterRate}/>
        <div className="container">
            
            {films.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&& el.rate>=rate).map(el=><MovieCard film={el}/>)}
        </div>

        </div>    )
}

export default MovieList
