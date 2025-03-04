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
                    <img className='h-96 w-full' src="https://i.ibb.co/dbGdCwm/Guesthouses-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='h-96 w-full' src="https://i.ibb.co/s9dH0ZY/Hotels-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='h-96 w-full' src="https://i.ibb.co/ckTYFDC/Lodges-1.jpg" alt="" />
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