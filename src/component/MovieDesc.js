import React from 'react'
import {withRouter,Link} from 'react-router-dom'




function MovieDesc(props) {
    let id=props.match.params.id;
    let film = props.films.find((film)=>film.id==id)
    console.log(film)

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1 style={{color:'white'}}>{film.title}</h1>
            <h3 style={{color:'white'}}>{film.description}</h3>
            <br></br>
            <h1 style={{color:'black'}}>Watch Trailer</h1>
            <iframe width="560" height="315" src={film.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default withRouter(MovieDesc)
