import style from "./style.module.css"
import {useEffect, useState, useContext}  from "react";
import Image from "next/image"
import { useRouter } from 'next/router'

//context
import {oderContext} from "../../context/OderContext";

//swiper
import "swiper/swiper-bundle.css"
// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Controller,Mousewheel } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Controller,Mousewheel ]);


import {charactors} from "../../src/charactors";

export default function ChooseGender({redirectLink}) {


    const {oder, setOder, Male, Female} = useContext(oderContext);
    let swiper;
    const [currentSlide, setCurrentSlide] = useState(0)
    const router = useRouter()

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
        console.log(oder);
    }, [])

    const handleOnClick = () => {
        setOder(prev => {
            return {
                ...prev,
                charactor:charactors[currentSlide].header,
            }
         });
         router.push(redirectLink);
    }

    let contents = charactors;

    const content = {
        header:"Create Your Own Fragrance",
        discription:"Choose a charactor",
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>{content.header}</h1>
                <p>{content.discription}</p>
            </div>
            <div className={[style.swiperContainer, "swiper-container"].join(" ")}>
                <div className={[style.swiperWraper, "swiper-wrapper"].join(" ")}>
                    {
                        contents.map((content, index) => {
                            return (
                                <div className={[style.swiperSlide, "swiper-slide"].join(" ")} key ={index}>
                                    <div className={style.slideItem}>
                                        <div className={style.sliderItem__image}>
                                            <Image src={content.url} layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                            <div className={[style.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                                        </div>
                                    </div>
                                    <div className={style.content}>
                                        <h2>{content.header}</h2>
                                        <button onClick={handleOnClick}>Choose</button>
                                    </div>
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
