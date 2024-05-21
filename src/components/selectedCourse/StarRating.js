import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars).fill().map((_, i) => (
        <span key={i} className="star full">&#9733;</span>
      ))}
      {halfStar && <span className="star half">&#9733;</span>}
      {Array(emptyStars).fill().map((_, i) => (
        <span key={i + fullStars + (halfStar ? 1 : 0)} className="star">&#9733;</span>
      ))}
    </div>
  );
};

export default StarRating;
