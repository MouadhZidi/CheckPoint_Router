import React from 'react'
import ReactStars from "react-rating-stars-component"



function MovieFilter({filterText,filterRate}) {
    return (
        <div  style={{display:'flex', flexDirection:'column'}}>
            <input onChange={(e)=>filterText(e.target.value)} placeholder="Type a movie"/>
           
           Looking with rate ?
            <ReactStars
            
    count={5}
    onChange={(newRating)=>filterRate(newRating)}
    size={24}
    activeColor="#ffd700"
  />
        </div>
    )
}

export default MovieFilter
