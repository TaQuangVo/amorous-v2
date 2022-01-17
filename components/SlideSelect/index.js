import { useState, useEffect } from "react";
import style from "./style.module.css"
import Image from "next/image"
import { motion } from "framer-motion";

//swiper
import "swiper/swiper-bundle.css"
// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar,EffectCoverflow,Mousewheel } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar,EffectCoverflow,Mousewheel]);


export default function ChooseGender({data, handleOnClick, content}) {


    let swiper;
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            mousewheel:true,
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
                rotate:30,
                depth:500,
                slideShadows:true,
                stretch:0,
                modifier:0.5,
            },
          });
        swiper.slideTo(1);
        swiper.slideTo(currentSlide);
        swiper.on('slideChange', (e) => {
            setCurrentSlide(e.activeIndex)
          });
    }, [])

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>{content.header}</h1>
                <p>{content.discription}</p>
            </div>
            <div className={[style.swiperContainer, "swiper-container"].join(" ")}>
                <div className={[style.swiperWraper, "swiper-wrapper"].join(" ")}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className={[style.swiperSlide, "swiper-slide"].join(" ")} key ={index}>
                                    <div className={style.slideItem}>
                                        <div className={style.sliderItem__image}>
                                            <Image src={item.url} layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                            <div className={[style.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                                        </div>
                                    </div>
                                    <motion.div layout className={style.content}>
                                        <motion.h2 layout>{item.header}</motion.h2>
                                        {index === currentSlide && 
                                        <motion.button 
                                        layout
                                        initial={{ opacity: 0, y:"-3rem" }}
                                        animate={{ opacity: 1, y:"0rem"}}
                                        onClick={() => handleOnClick(currentSlide)}>Choose</motion.button>}
                                    </motion.div> 
                                </div>
                            )
                        })
                    }
                </div>
                <div className={[style.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
                <div className={[style.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
            </div>
            
        </div>
    )
}
