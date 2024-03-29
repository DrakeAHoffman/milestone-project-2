import { useState } from "react";
//import App from '../App'

import { FaStar } from "react-icons/fa";

function Ratings() {
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(false);
  return (
    <div className="Ratings">
      {Array(5)
        .fill(null)
        .map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                id=""
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={50}
                color={hover || rating ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </label>
          );
        })}
      <p>Your Rating is {rating}</p>
    </div>
  );
}

export default Ratings;
