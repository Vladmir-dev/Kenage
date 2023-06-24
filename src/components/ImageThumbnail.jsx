import React from "react";

const ImageThumbnail = ({ image, onClick }) => {
  return (
    <img
      src={image}
      alt="products"
      onClick={onClick}
      className="w-[100px] h-[100px]"
    />
  );
};

export default ImageThumbnail;
