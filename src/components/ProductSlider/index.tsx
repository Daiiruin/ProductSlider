import { FC, useState } from "react";
import "./productSlider.css";
import { ProductSliderProps } from "./types";

export const ProductSlider: FC<ProductSliderProps> = ({ images }) => {
  const [bigImage, setBigImage] = useState(images[0]);

  return (
    <div className="productSliderContainer">
      <div className="productImagesContainer">
        {images.map((image, index) => (
          <img
            className={`productImage ${image === bigImage ? "active" : ""}`}
            key={index}
            src={image}
            alt={`image-${index}`}
            onClick={() => setBigImage(image)}
          />
        ))}
      </div>
      <img className="bigImage" src={bigImage} alt="bigImage" />
    </div>
  );
};
