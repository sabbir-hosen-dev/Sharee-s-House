import { Carousel } from "react-responsive-carousel";

import slider from "../../Data/SliderData.json";

function Slider() {
  return (
    <div className="wrap mt-2 ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {slider.map((data) => (
          <div className="h-full" key={data.id}>
            <img className="w-full h-full " src={data.image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
