
import styleChooseBottle from "../styles/ChooseBottle.module.css"
import {useEffect, useState, useContext}  from "react";
import Image from "next/image"
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

//data
import {bottleShapes} from "../src/bottleShapes"

//context
import {oderContext} from "../context/OderContext";

//swiper
import "swiper/swiper-bundle.css"
// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination,EffectCoverflow,Mousewheel } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination,EffectCoverflow,Mousewheel ]);

export default function ChooseBottle({redirectLink}) {


    const {oder, setBottleDesign} = useContext(oderContext);
    let swiper;
    const [currentSlide, setCurrentSlide] = useState(0)
    const router = useRouter();
    const bottles = bottleShapes;

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
                slideShadows:false,
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
        setBottleDesign(prev => {
            return {
                ...prev,
                bottle: bottles[currentSlide],
            }
        })
        router.push(redirectLink);
    }

    const content = {
        header: "Create Your Own Fragrance",
        discription:"Choose a bottle"
    }



    return (
        <div className={styleChooseBottle.container}>
            <div className={styleChooseBottle.header}>
                <h1>{content.header}</h1>
                <p>{content.discription}</p>
            </div>
            <div className={[styleChooseBottle.swiperContainer, "swiper-container"].join(" ")}>
                <div className={[styleChooseBottle.swiperWraper, "swiper-wrapper"].join(" ")}>
                    {
                        bottles.map((bottle, index) => {
                            return (
                                <div className={[styleChooseBottle.swiperSlide, "swiper-slide"].join(" ")} key ={index}>
                                    <div className={styleChooseBottle.slideItem}>
                                        <div className={styleChooseBottle.sliderItem__image}>
                                            <Image src={bottle.url} layout="fill" objectFit="contain" objectPosition="center center" quality={20}></Image>
                                        </div>                  
                                    </div>
                                    <motion.div layout className={styleChooseBottle.content}>
                                        <motion.h2 layout>{bottle.name}</motion.h2>
                                        {index === currentSlide && 
                                        <motion.button 
                                        layout
                                        initial={{ opacity: 0, y:"-3rem" }}
                                        animate={{ opacity: 1, y:"0rem"}}
                                        onClick={handleOnClick}>Choose</motion.button>}
                                    </motion.div> 
                                </div>
                            )
                        })
                    }
                </div>
                <div className={[styleChooseBottle.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
                <div className={[styleChooseBottle.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
            </div>
            
        </div>
    )
}