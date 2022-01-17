import style from "./style.module.css"
import Image from "next/image"

export default function index({text, box}) {
    
    if(box == null || text == null){
        return <p className={style.noBox}>No box sellected!</p>
    }

    return (
        <div className={style.boxContainer}>
          <div className={style.controller}>
            <div className={style.box} >
                <div className={style.top}> 
                    <Image src="/boxes/boxOne/top.jpg" layout="fill" />
                    <div className={style.boxsidesOverlay}></div>
                </div>
                <div className={style.right}>
                    <Image src="/boxes/boxOne/left.jpg" layout="fill" />
                    <div className={style.boxsidesOverlay}></div>
                </div>
                <div className={style.left}>
                    <Image src="/boxes/boxOne/left.jpg" layout="fill" />
                    <div className={style.boxsidesOverlay}></div>
                </div>
                <div className={style.bottom}>
                    <Image src="/boxes/boxOne/top.jpg" layout="fill" />
                    <div className={style.boxsidesOverlay}></div>
                </div>
                <div className={style.front}>
                    <Image src="/boxes/boxOne/front.jpg" layout="fill" />
                    <div className={style.boxsidesOverlay}></div>
                </div>
                <div className={style.back}>
                    <Image src="/boxes/boxOne/back.jpg" layout="fill" />
                    <div className={style.boxsidesOverlay}></div>
                    <span style={{
                        fontSize:"calc( "+ text.fontSize.fontsize +"px * var(--boxPreview-scale))",
                        fontFamily:text.font.fontFamily
                    }}>{text.text}</span>
                </div>
              </div>
            </div>
          </div>
    )
}
