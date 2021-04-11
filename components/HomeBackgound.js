import styleHomeBackground from "../styles/HomeBackgound.module.css";
import Image from "next/image"
import {useEffect, useRef} from "react"

import dynamic from 'next/dynamic'
const Bubble  = dynamic(() => import("../library/Bubbles-master"),{ ssr: false })


export default function HomeBackgound({img}) {



    useEffect(() => {

        const handleMouseMove = (e) => {
            const imageWrap = document.getElementById("imgWrapBackground");

            const midleX = window.innerWidth / 2;
            const midleY = window.innerHeight / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;


            const offsetX = mouseX / midleX-1;
            const offsetY = mouseY / midleY-1;


            if(imageWrap !== null && midleX > 500){
                imageWrap.style.setProperty("--offsetX", offsetX * -50 +"px")
                imageWrap.style.setProperty("--offsetY", offsetY * -50 +"px")
            }
            if(imageWrap !== null && midleX <= 500){
                imageWrap.style.setProperty("--offsetX", offsetX * 0 +"px")
                imageWrap.style.setProperty("--offsetY", offsetY * 0 +"px")
            }

        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    return (
        <div className={styleHomeBackground.backgroundImage}>
            <div id="imgWrapBackground" className={styleHomeBackground.backgroundImage__wraper}>
                <Image src={img} layout="fill" objectFit="cover" quality={20} ></Image>
                <div className={styleHomeBackground.backgroundImage__overlay}></div>
            </div>
            <Bubble color="255, 255, 255"/>
        </div>
    )
}
