import { Parallax, Pagination, Navigation } from 'swiper/modules';

// Imported Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Imported Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../imageslider.css'

// imported data 


const ImageSlider = ({data}) => {
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
            'backgroundImage':
              'url(https://c4.wallpaperflare.com/wallpaper/714/717/309/5bd0335a8c605-wallpaper-preview.jpg',
          }}
          data-swiper-parallax="-23%"
        ></div>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              className="title"
              data-swiper-parallax="-300"
            >
              <img
                src={data.imageUrl}
                alt="Icon"
                className="icon-image"
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