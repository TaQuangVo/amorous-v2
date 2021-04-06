import styleChoseGender from "../styles/ChooseGender.module.css"
import Image from "next/image"


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css"

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Controller,Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Controller,Mousewheel ]);

export default function ChooseGender() {
    return (
        <div className={styleChoseGender.container}>
            <div className={styleChoseGender.header}>
                <h1>Create Your Own Fragrance</h1>
                <p>Choose Gender</p>
            </div>
            <div className={styleChoseGender.slideShowContainer}>
                <Swiper
                mousewheel={true}
                speed={600}
                effect="coverflow"
                coverflowEffect={{
                    rotate:50,
                    depth:700,
                    slideShadows:true,
                    stretch:0,
                    modifier:0.5,
                }}
                centeredSlides={true}
                spaceBetween={10}
                slidesPerView="auto"
                loop={false}
                navigation
                pagination={{ clickable: true }}
                //scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(e) => console.log(e.activeIndex)}
                slideToClickedSlide={true}
                
                >
                   
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/casual-man.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/casual-women.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
{   /*                 <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/business.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/charismatic.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/dynamic.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>  
                     <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/events.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>  
                     <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/everyday-life.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>   <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/extravagant.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>  
                     <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/feminine.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>   
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/floral.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide> 
                      <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/fresh.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>  
                     <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/glamorous.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>  
                     <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/leather.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>  
                     <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/leisure-time.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>   
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/masculine.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>   
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/natural.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/oriental.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/royal-women.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/royal.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/sensual.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/sport.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/to-go-out.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItemW--designYO">
                        <div className={styleChoseGender.slideItem}>
                            <div className={styleChoseGender.sliderItem__image}>
                                <Image src="/charactors/woody.jpg" layout="fill" objectFit="cover" objectPosition="center centerz" quality={20}></Image>
                                <div className={styleChoseGender.sliderItem__overlay}></div>
                            </div>
                        </div>
            </SwiperSlide> */}

                    
                </Swiper> 
            </div>
        </div>
    )
}
