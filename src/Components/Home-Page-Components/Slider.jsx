import { Carousel } from "react-responsive-carousel";

import slider from "../../Data/SliderData.json";

function Slider() {
  return (
    <div className="wrap rounded-md overflow-hidden mt-2">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        dynamicHeight={false}
        className="rounded-md"
      >
        {slider.map((data) => (
          <img key={data.id} className="w-full overflow-hidden  h-[250px] md:h-[380px] xl:h-[600px] rounded-md " src={data.image} alt="" />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
