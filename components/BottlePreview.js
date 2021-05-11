import {useState} from "react";
import StyleBottlePreview from "../styles/BottlePreview.module.css"

import Image from "next/image";

export default function BottlePreview({
    bottle,
    firstText,
    secondText,
    thirdText="kjh",
}) {
    
    const topTextStyle = {
        left:`calc(50% + ${bottle.topText.xOffset}%)`,
        top:`${bottle.topText.y}%`,
        transform: `rotate(${bottle.topText.rotate}deg) translate(-50%, 0px)`,
        maxWidth:`${bottle.topText.maxWidth}%`,
    }

    return (
        <div className={StyleBottlePreview.container} id="bottle-preview">
            <div className={StyleBottlePreview.image}>
                <img src={bottle.url} alt="bottle image"/>
            </div>
            <div className={StyleBottlePreview.contents}>
                <div className={StyleBottlePreview.topText} style={topTextStyle}>
                    <p className={StyleBottlePreview.textOne}>{firstText}</p>
                    <p className={StyleBottlePreview.textTwo}>{secondText}</p>
                </div>
                <p style={{
                    top:`${bottle.bottomText.y}%`,
                    left:`calc(50% + ${bottle.bottomText.xOffset}%)`,
                    rotate:`${bottle.bottomText.rotate}`,
                    transform: `translate(-50%, 0px) rotate(${bottle.bottomText.rotate}deg) `,
                    maxWidth:`${bottle.bottomText.maxWidth}%`,
                }} className={StyleBottlePreview.textThree}>{thirdText}</p>
            </div>
        </div>
    )
}
