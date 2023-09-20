import { Parallax, Pagination, Navigation } from 'swiper/modules';

// Imported Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Imported Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../imageslider.css'

// imported data 
import { data } from '../utils/mock';

const ImageSlider = () => {
  return (
 <>
  <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={800}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://img.freepik.com/free-vector/alien-planet-landscape-cosmic-background-space_107791-13156.jpg?size=626&ext=jpg&ga=GA1.2.356435471.1688203253&semt=ais',
          }}
          data-swiper-parallax="-23%"
        ></div>
        {data.map((data) => (
          <SwiperSlide>
            <div
              className="title"
              data-swiper-parallax="-300"
            >
              <img
                src={data.imageUrl}
                alt="img "
              />
            </div>
            <div
              className="subtitle"
              data-swiper-parallax="-200"
            >
              {data.title}
            </div>
            <div
              className="text"
              data-swiper-parallax="-100"
            >
              <p>{data.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 </>
  )
}

export default ImageSlider