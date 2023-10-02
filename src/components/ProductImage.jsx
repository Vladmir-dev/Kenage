import React, { useState } from "react";
import LargImageDisplay from "./LargImageDisplay";
import ImageThumbnail from "./ImageThumbnail";

const ProductImage = ({ images, selectedImage, setSelectedImage }) => {
  

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <LargImageDisplay image={selectedImage} />
      <div className="mt-[10px] grid grid-cols-4">
        {images.map((image, index) => (
          <ImageThumbnail
            key={index}
            image={image}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
