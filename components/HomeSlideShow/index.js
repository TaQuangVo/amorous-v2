import {useEffect, useContext}  from "react";
import style from "./style.module.css"
import Image from "next/image"

//context
import {homeContext} from "../../context/HomepageContext";

// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Controller,Mousewheel } from 'swiper';

import "swiper/swiper-bundle.css"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Controller,Mousewheel ]);



export default function HomeSlideShow({setcurrentSlide}) {

    const {content} = useContext(homeContext)
    let swiper;

    useEffect(() => {
        swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            speed:600,
            slideToClickedSlide:true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            centeredSlides:true,
            spaceBetween:50,
            slidesPerView:"auto",
            loop:false,
            pagination:{clickable:true},
            slideToClickedSlide:true,
            coverflowEffect: {
                rotate:50,
                depth:700,
                slideShadows:true,
                stretch:0,
                modifier:0.5,
            },
          });
          swiper.slideTo(1);
          swiper.slideTo(0);
          setcurrentSlide(0);
          swiper.on('slideChange', (e) => {
            setcurrentSlide(e.activeIndex)
          });
    }, [])

    return (

        <div className={[style.swiperContainer, "swiper-container"].join(" ")}>
            <div className={[style.swiperWraper, "swiper-wrapper"].join(" ")}>

                {
                    content.map((slide, index) => {
                        return(
                            <div className={[style.swiperSlide, "swiper-slide"].join(" ")} key={index}>
                                <div className={style.slideItem}>
                                    <div className={style.sliderItem__image}>
                                        <Image src={slide.img} layout="fill" objectFit="cover" objectPosition="top left" quality={20}></Image>
                                        <div className={[style.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={[style.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
            <div className={[style.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
        </div>
    )
}