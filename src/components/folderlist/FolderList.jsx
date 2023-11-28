// FolderList.js

import React from 'react';
import './FolderList.css';
import { Link } from 'react-router-dom';


const FolderList = ({ folders}) => {
  return (

    <div className="folder-list">
      {folders.map(folder => (
      <Link to={`/pinout/${folder.name}`} key={folder.id}>
        <div  className="folder-item">
         {folder.image && <img src={folder?.image} alt={folder.name} />}
          <h3>{folder.name}</h3>
          <p>{folder.description}</p>
          {folder.price && <p className="price">${folder?.price}</p>}
        </div>
      </Link>
      ))}
    </div>
  );
};

export default FolderList;
