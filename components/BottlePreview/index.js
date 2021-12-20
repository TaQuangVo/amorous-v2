import style from "./style.module.css"

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
        <div className={style.container} id="bottle-preview">
            <div className={style.image}>
                <img src={bottle.url} alt="bottle image"/>
            </div>
            <div className={style.contents}>
                <div className={style.topText} style={topTextStyle}>
                    <p className={style.textOne}>{firstText}</p>
                    <p className={style.textTwo}>{secondText}</p>
                </div>
                <p style={{
                    top:`${bottle.bottomText.y}%`,
                    left:`calc(50% + ${bottle.bottomText.xOffset}%)`,
                    rotate:`${bottle.bottomText.rotate}`,
                    transform: `translate(-50%, 0px) rotate(${bottle.bottomText.rotate}deg) `,
                    maxWidth:`${bottle.bottomText.maxWidth}%`,
                }} className={style.textThree}>{thirdText}</p>
            </div>
        </div>
    )
}
