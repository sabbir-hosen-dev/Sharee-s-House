import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import premulKatan from '../../../data/PremiumKatanData'
import { Link } from 'react-router-dom'

function Carusol() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])


  return (
    <div className="container m-auto px-5 py-5 md:py-10 embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {premulKatan.map((data,index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Link to={`/item/${data.id}`}>  <img className='w-[97%] md:w-[95%] md:h-[460px] h-[300px] rounded-xl m-auto' src={data.image} alt="" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Carusol
