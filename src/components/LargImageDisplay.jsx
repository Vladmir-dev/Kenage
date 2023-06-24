import React from "react";

const LargImageDisplay = ({ image }) => {
  return (
    <img src={image} alt="product" className="md:w-[500px] md:h-[600px]" />
  );
};

export default LargImageDisplay;
