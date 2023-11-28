// FolderImg.js

import React from 'react';
import './FolderImg.css';
import { Link } from 'react-router-dom';


const FolderImg = ({ folder}) => {
  return (

    <div className="img-list">
      {folder.map(card => (
      <Link to={`${card.name}`} key={card.id}>
        <div  className="img-card">
         {card.image && <img src={card?.image} alt={card.name} />}
          <h3>{card.name}</h3>
          <p>{card?.description}</p>
          {card?.price && <p className="price">${card?.price}</p>}
        </div>
      </Link>
      ))}
    </div>
  );
};

export default FolderImg;
