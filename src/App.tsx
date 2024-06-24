import "./App.css";
import { ProductSlider } from "./components/ProductSlider";

export const App = () => {
  return (
    <div className="homeContainer">
      <ProductSlider
        images={[
          "../public/images/car1.jpg",
          "../public/images/car2.png",
          "../public/images/car3.jpg",
          "../public/images/car4.jpg",
          "../public/images/car5.jpg",
        ]}
      />
    </div>
  );
};
