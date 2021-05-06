import styleChoseImpression from "../styles/ChooseCharactor.module.css"
import {useEffect, useState, useContext}  from "react";
import Image from "next/image"
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

//context
import {oderContext} from "../context/OderContext";

//swiper
import "swiper/swiper-bundle.css"
// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination,EffectCoverflow,Mousewheel } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination,EffectCoverflow,Mousewheel ]);


import {impressionMale} from "../src/impresstionMale";
import {impressionFemale} from "../src/impresstionFemale";

export default function ChoseImpression({redirectLink}) {


    const {oder, setOder, Male, Female} = useContext(oderContext);
    let swiper;
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();
    let impressions

    if(oder.gender === Male){
        impressions = impressionMale
    }else if(oder.gender === Female){
        impressions = impressionFemale
    }else{
        impressions = impressionMale
    }

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
                impression: impressions[currentSlide].header,
            }
        })
        router.push(redirectLink);
    }

    const content = {
        header: "Create Your Own Fragrance",
        discription:"Choose a impression"
    }

    return (
        <div className={styleChoseImpression.container}>
            <div className={styleChoseImpression.header}>
                <h1>{content.header}</h1>
                <p>{content.discription}</p>
            </div>
            <div className={[styleChoseImpression.swiperContainer, "swiper-container"].join(" ")}>
                <div className={[styleChoseImpression.swiperWraper, "swiper-wrapper"].join(" ")}>
                    {
                        impressions.map((impression, index) => {
                            return (
                                <div className={[styleChoseImpression.swiperSlide, "swiper-slide"].join(" ")} key ={index}>
                                    <div className={styleChoseImpression.slideItem}>
                                        <div className={styleChoseImpression.sliderItem__image}>
                                            <Image src={impression.url} layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                            <div className={[styleChoseImpression.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                                        </div>
                                    </div>
                                    <motion.div layout className={styleChoseImpression.content}>
                                        <motion.h2 layout>{impression.header}</motion.h2>
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
                <div className={[styleChoseImpression.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
                <div className={[styleChoseImpression.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
            </div>
            
        </div>
    )
}
