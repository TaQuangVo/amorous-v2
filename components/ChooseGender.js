import styleChoseGender from "../styles/ChooseGender.module.css"
import {useEffect}  from "react";
import Image from "next/image"

import "swiper/swiper-bundle.css"

// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Controller,Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Controller,Mousewheel ]);

export default function ChooseGender() {

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
          swiper.on('slideChange', (e) => {
            console.log("swiper")
          });
    }, [])

    return (
        <div className={styleChoseGender.container}>
            <div className={styleChoseGender.header}>
                <h1>Create Your Own Fragrance</h1>
                <p>Choose Gender</p>
            </div>
            <div className={[styleChoseGender.swiperContainer, "swiper-container"].join(" ")}>
            <div className={[styleChoseGender.swiperWraper, "swiper-wrapper"].join(" ")}>
                <div className={[styleChoseGender.swiperSlide, "swiper-slide"].join(" ")}>
                    <div className={styleChoseGender.slideItem}>
                        <div className={styleChoseGender.sliderItem__image}>
                            <Image src="/design-your-own.jpg" layout="fill" objectFit="cover" objectPosition="top left" quality={20}></Image>
                            <div className={[styleChoseGender.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                        </div>
                    </div>
                </div>
                <div className={[styleChoseGender.swiperSlide, "swiper-slide"].join(" ")}>
                    <div className={styleChoseGender.slideItem}>
                        <div className={styleChoseGender.sliderItem__image}>
                            <Image src="/make-the-good-better-img.jpg" layout="fill" objectFit="cover" objectPosition="left center" quality={20}></Image>
                            <div className={[styleChoseGender.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={[styleChoseGender.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
            <div className={[styleChoseGender.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
        </div>
        </div>
    )
}
