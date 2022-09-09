import { Slider } from "../slider/Slider";
import { Nav } from "./Nav";
import Slide1 from "../../assets/images/house-1.jpg";
import Slide2 from "../../assets/images/house-2.jpg";
import Slide3 from "../../assets/images/apartment-3.jpg";
import Slide4 from "../../assets/images/house-3.jpg";
import Slide5 from "../../assets/images/house-6.jpg";

export const Header = () => {
  const carouselItems = [
    {
      url: Slide1,
      alt: "House Villa",
    },
    {
      url: Slide2,
      alt: "House Villa",
    },
    {
      url: Slide3,
      alt: "House Apartment",
    },
    {
      url: Slide4,
      alt: "House Villa",
    },
    {
      url: Slide5,
      alt: "House Villa",
    },
  ];

  return (
    <header>
      <Nav />
      <Slider carouselItems={carouselItems} time={6000} shouldChange={true} />
    </header>
  );
};
