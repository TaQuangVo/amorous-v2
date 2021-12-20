import style from "./style.module.css"
import {useEffect, useState, useContext}  from "react";
import Image from "next/image"
import { useRouter } from 'next/router'

//components
import ChooseGenderContent from "../ChooseGenderContent";

//context
import {oderContext} from "../../context/OderContext";

//
//swiper
import "swiper/swiper-bundle.css"
// import Swiper core and required modules
import SwiperCore, { Swiper, Navigation, Pagination,EffectCoverflow } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination,EffectCoverflow ]);


export default function ChooseGender({redirectLink}) {


    const {setOder, Male, Female} = useContext(oderContext);
    let swiper;
    const [currentSlide, setCurrentSlide] = useState(0)
    const router = useRouter();

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
        swiper.slideTo(currentSlide);
        swiper.on('slideChange', (e) => {
            setCurrentSlide(e.activeIndex)
          });
    }, [])

    const handleOnClick = () => {
        setOder(prev => {
            return {
                ...prev,
                gender: currentSlide === 0 ? Male : Female,
            }
        })
        router.push(redirectLink);
    }

    let content = [{
        header:"Male",
        discription:"Create the perfect male fragrance",
        btn:"Let create"
    },{
        header:"Female",
        discription:"Create the perfect female fragrance",
        btn:"Let create"
    }];

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Create Your Own Fragrance</h1>
                <p>Choose Gender</p>
            </div>
            <div className={[style.swiperContainer, "swiper-container"].join(" ")}>
                <div className={[style.swiperWraper, "swiper-wrapper"].join(" ")}>
                    <div className={[style.swiperSlide, "swiper-slide"].join(" ")}>
                        <div className={style.slideItem}>
                            <div className={style.sliderItem__image}>
                                <Image src="/img/male.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                <div className={[style.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                            </div>
                        </div>
                        {
                            currentSlide === 0 && 
                            <ChooseGenderContent 
                            content={content[currentSlide]} 
                            onClick= {handleOnClick} />
                        }
                    </div>
                    <div className={[style.swiperSlide, "swiper-slide"].join(" ")}>
                        <div className={style.slideItem}>
                            <div className={style.sliderItem__image}>
                                <Image src="/img/female.jpg" layout="fill" objectFit="cover" objectPosition="center center" quality={20}></Image>
                                <div className={[style.sliderItem__overlay, "sliderItem__overlay"].join(" ")}></div>
                            </div>
                        </div>
                        {
                            currentSlide === 1 && 
                            <ChooseGenderContent 
                            content={content[currentSlide]} 
                            onClick= {handleOnClick} />
                        }
                    </div>
                </div>
                <div className={[style.SwiperBtnPrev, "swiper-button-prev"].join(" ")}></div>
                <div className={[style.SwiperBtnNext, "swiper-button-next"].join(" ")}></div>
            </div>
            
        </div>
    )
}
