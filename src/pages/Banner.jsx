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
                    <img className='h-96 w-full' src="https://i.ibb.co.com/sJKSPxrL/variety-of-wooden-kitchen-utensils-on-slate-background-for-rustic-culinary-decor-photo.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-96 w-full' src="https://i.ibb.co.com/d48VN8yK/images-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-96 w-full' src="https://i.ibb.co.com/WN74TyWM/Popular-wooden-home-decor-items-in-2024-10.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;