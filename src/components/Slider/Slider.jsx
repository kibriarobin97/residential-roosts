import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import 'animate.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {


    return (
        <div className='my-5'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                
            >
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-96 w-full' src="https://i.ibb.co/jD9Yt9n/single-family.jpg" alt="" />
                    <div className='absolute bottom-6 md:bottom-10 w-1/2 bg-black ml-20 p-3 bg-opacity-60 rounded-md animate__animated animate__fadeInRight'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Single-family homes</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                                These standalone dwellings provide the utmost privacy, space, and autonomy, catering to those seeking a personalized haven amidst the bustling urban landscape or serene suburban neighborhoods.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-96 w-full' src="https://i.ibb.co/xY1DZBF/apartments2.jpg" alt="" />
                    <div className='absolute bottom-6 md:bottom-10 w-1/2 bg-black ml-20 p-3 bg-opacity-60 rounded-md animate__animated animate__fadeInRight'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Apartments</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                            Nestled in a vibrant neighborhood, our apartments offer a modern and luxurious living experience tailored to your lifestyle.you'll be greeted by spacious interiors adorned with contemporary finishes and thoughtful design elements.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-96 w-full' src="https://i.ibb.co/8cCKtJz/townhouses2.jpg" alt="" />
                    <div className='absolute bottom-6 md:bottom-10 w-1/2 bg-black ml-20 p-3 bg-opacity-60 rounded-md animate__animated animate__fadeInRight'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Townhouses</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                            Nestled within a picturesque neighborhood in town, our townhouses are designed to cater to modern lifestyles while retaining the timeless appeal of traditional architecture.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-96 w-full' src="https://i.ibb.co/HTpHKKD/vacation-rentals.jpg" alt="" />
                    <div className='absolute bottom-6 md:bottom-10 w-1/2 bg-black ml-20 p-3 bg-opacity-60 rounded-md animate__animated animate__fadeInRight'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Vacation Rentals</h3> 
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                            Escape to your own private oasis with our luxurious vacation rental in island. Nestled in the heart of paradise, our Beachfront Villa offers the perfect blend of comfort, convenience, and serenity for your dream getaway.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;