import {useState} from "react";
import StyleBottlePreview from "../styles/BottlePreview.module.css"

import Image from "next/image";

export default function BottlePreview({
    imageUrl,
    firstText,
    secondText,
    thirdText="kjh",
}) {
    


    return (
        <div className={StyleBottlePreview.container} id="bottle-preview">
            <div className={StyleBottlePreview.image}>
                <img src={imageUrl} />
            </div>
            <div className={StyleBottlePreview.contents}>
                <div className={StyleBottlePreview.topText}>
                    <p className={StyleBottlePreview.textOne}>{firstText}</p>
                    <p className={StyleBottlePreview.textTwo}>{secondText}</p>
                </div>
                <p className={StyleBottlePreview.textThree}>{thirdText}</p>
            </div>
        </div>
    )
}
