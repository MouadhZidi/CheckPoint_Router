import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'

function MovieCard({film}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={film.posterUrl} style={{height:'300px'}}/>
  <Card.Body>
    <Card.Title style={{color:'black'}}>{film.title}</Card.Title>
    <Card.Text style={{color:'black',height:'150px'}}>
      {film.description}
    </Card.Text>
    <ReactStars
    count={5}
   value={film.rate}
    edit={false}
    //onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  <Button variant="link"><Link to={`/description/${film.id}`}>Description</Link></Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
