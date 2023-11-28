import React, { useState } from 'react';
import './ImagePreview.css'; // Import your CSS file

const ImagePreview = ({ imageUrl, altText }) => {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="image-preview-container">
      <img
        src={imageUrl}
        alt={altText}
        onClick={togglePreview}
        className="thumbnail"
      />

      {showPreview && (
        <div className="preview-overlay" onClick={togglePreview}>
          <div className="preview-content">
            <img src={imageUrl} alt={altText} className="full-size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
