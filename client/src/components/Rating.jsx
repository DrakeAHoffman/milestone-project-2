import React, { useState } from "react"


function Rating (props) {
    const [rating, setRating] = useState(props.stars);

    return (
     <div className="Rating">
     <button onClick={() => setRating(1)}> {'★'}</button>
     <button onClick={() => setRating(2)}>{(rating >= 2) ? '★': '☆'}</button>
     <button onClick={() => setRating(3)}>{(rating >= 3) ? '★': '☆'}</button>
     <button onClick={() => setRating(4)}>{(rating >= 4) ? '★': '☆' }</button>
     <button onClick={() => setRating(5)}>{(rating === 5) ? '★': '☆' }</button>
    </div>);
}

export default Rating;