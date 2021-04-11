import {useEffect}  from "react";
import styleHomeSlideShow from "../styles/HomeSlideShow.module.css"
import Image from "next/image"


// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Controller,Mousewheel } from 'swiper';

import "swiper/swiper-bundle.css"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Controller,Mousewheel ]);



export default function HomeSlideShow({setcurrentSlide}) {

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
          setcurrentSlide(1);
          swiper.on('slideChange', (e) => {
            setcurrentSlide(e.activeIndex)
          });
    }, [])

    return (

        <div className={[styleHomeSlideShow.swiperContainer, "swiper-container"].join(" ")}>
            <div className={[styleHomeSlideShow.swiperWraper, "swiper-wrapper"].join(" ")}>
                <div className={[styleHomeSlideShow.swiperSlide, "swiper-slide"].join(" ")}>
                    <div className={styleHomeSlideShow.slideItem}>
                        <div className={styleHomeSlideShow.sliderItem__image}>
                            <Image src="/design-your-own.jpg" layout="fill" objectFit="cover" objectPosition="top left" quality={20}></Image>
                            <div className={[styleHomeSlideShow.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                        </div>
                    </div>
                </div>
                <div className={[styleHomeSlideShow.swiperSlide, "swiper-slide"].join(" ")}>
                    <div className={styleHomeSlideShow.slideItem}>
                        <div className={styleHomeSlideShow.sliderItem__image}>
                            <Image src="/make-the-good-better-img.jpg" layout="fill" objectFit="cover" objectPosition="left center" quality={20}></Image>
                            <div className={[styleHomeSlideShow.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                        </div>
                    </div>
                </div>
                <div className={[styleHomeSlideShow.swiperSlide, "swiper-slide"].join(" ")}>
                    <div className={styleHomeSlideShow.slideItem}>
                        <div className={styleHomeSlideShow.sliderItem__image}>
                            <Image src="/let-us-choose.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                            <div className={[styleHomeSlideShow.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={[styleHomeSlideShow.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
            <div className={[styleHomeSlideShow.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
        </div>
    )
}