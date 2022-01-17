import style from "./style.module.css"

export default function BottlePreview({
    bottle,
    firstText,
    secondText,
    thirdText,
}) {


    if(bottle === null || firstText === null || secondText === null || thirdText === null){
        return <p className={style.noBottle}>No bottle sellected</p>
    }
    
    const topTextStyle = {
        left:`calc(50% + ${bottle.topText.xOffset}%)`,
        top:`${bottle.topText.y}%`,
        transform: `rotate(${bottle.topText.rotate}deg) translate(-50%, 0px)`,
        maxWidth:`${bottle.topText.maxWidth}%`,
    }

    return (
        <div className={style.container} id="bottle-preview">
            <div className={style.image}>
                <img src={bottle.url} alt="bottle image"/>
            </div>
            <div className={style.contents}>
                <div className={style.topText} style={topTextStyle}>
                    <p className={style.textOne} style={{
                        fontFamily:firstText.font.fontFamily,
                        fontSize:"calc( " + firstText.fontSize.fontsize + "px * var(--scale)"
                        }}>{firstText.text}</p>
                    <p className={style.textTwo} style={{
                        fontFamily:secondText.font.fontFamily,
                        fontSize:"calc( " + secondText.fontSize.fontsize + "px * var(--scale)"
                        }}>{secondText.text}</p>
                </div>
                <p style={{
                    top:`${bottle.bottomText.y}%`,
                    left:`calc(50% + ${bottle.bottomText.xOffset}%)`,
                    rotate:`${bottle.bottomText.rotate}`,
                    transform: `translate(-50%, 0px) rotate(${bottle.bottomText.rotate}deg) `,
                    maxWidth:`${bottle.bottomText.maxWidth}%`,
                    fontFamily:thirdText.font.fontFamily,
                    fontSize:"calc( " + thirdText.fontSize.fontsize + "px * var(--scale)"
                }} className={style.textThree}>{thirdText.text}</p>
            </div>
        </div>
    )
}
