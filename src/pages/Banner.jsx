import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
const Banner = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }} 
                loop={true} 
                className="mySwiper animate__animated animate__bounce animate__delay-2s"
            >
                <SwiperSlide className='text-center'>
                    <img className='h-96 w-full' src="https://i.ibb.co.com/5XrZTm4n/Wooden-Furniture-Sculptures2.jpg"
 alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='h-96 w-full' src="https://i.ibb.co.com/9kSwJtfT/Wooden-Furniture-Sculptures1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='h-96 w-full' src="https://i.ibb.co.com/DmtG8Zp/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-96 w-full' src="https://i.ibb.co/0D3qscQ/resorts-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-96 w-full' src="https://i.ibb.co/5cXgFpM/vacation-rentals-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-96 w-full' src="https://i.ibb.co/Rjr1FRb/Guesthouses3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;