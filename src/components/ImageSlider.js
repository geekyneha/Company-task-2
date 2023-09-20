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
              'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxofQT5m7lMTcMrcYTdOzP10lzZRyslpMp-lkhNvYyK0z25VemIqhESInFPOLZLSqLpA&usqp=CAU)',
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