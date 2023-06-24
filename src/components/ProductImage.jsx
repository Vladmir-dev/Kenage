import React, { useState } from "react";
import LargImageDisplay from "./LargImageDisplay";
import ImageThumbnail from "./ImageThumbnail";

const ProductImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <LargImageDisplay image={selectedImage} />
      <div className="mt-[10px]">
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
