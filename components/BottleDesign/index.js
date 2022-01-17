import {useEffect, useState, useContext}  from "react";
import style from "./style.module.css"
import { useRouter } from 'next/router'

//data
import {fontFamily} from "../../src/fontFamily"

//context
import {oderDispatchContext} from "../../context/OderContext";
import {oderStateContext} from "../../context/OderContext";

//conponents
import BottlePreview from "../BottlePreview"
import Dropdown from "../Dropdown";

export default function BottleDesign({redirectLink}) {

    const oderDispatch  = useContext(oderDispatchContext);
    const oderState  = useContext(oderStateContext);

    const fonts = fontFamily;
    const router = useRouter();

    const [firstText, setFirstText] = useState({
        text:"",
        font:fonts[0],
        fontSize:fonts[0].fontSize[1],
    })
    const [secondText, setSecondText] = useState({
        text:"",
        font:fonts[0],
        fontSize:fonts[0].fontSize[1],
    })
    const [thirdText, setThirdText] = useState({
        text:"",
        font:fonts[0],
        fontSize:fonts[0].fontSize[1],
    })


    const handleBottleDesign = () => {
        oderDispatch({
            type:"SETBOTTLEDISIGN",
            payload:{
                firstText:firstText,
                secondText:secondText,
                thirdText:thirdText,
            }
        })

        router.push(redirectLink);
    }

    const pageContents = {
        header: "Design your bottle",
        sub:"Make the bottle personale by writting something meaningful",
        topText : "Top text",
        midleText : "Middle text",
        bottomText : "Bottom text",
        yourText : "Your Text",
        continue : "Continue"
    }

    return (
        <div  className={style.container}>
            <div className={style.scroller}>
                <div className={style.header}>
                    <h1>{pageContents.header}</h1>
                    <p>{pageContents.sub}</p>
                </div>
                <div className={style.body}>
                    <div className={style.inputSide}>
                        <form>
                            <label htmlFor="topInput">{pageContents.topText}</label>
                            <div className={style.Dropdown} style={{zIndex:3}}>
                                <div className={style.fontfamily}>
                                    <Dropdown inputs={fonts} init={firstText.font} 
                                    onChange={(index)=>{
                                        setFirstText(prev => {
                                            return {...prev,font:fonts[index] }
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={firstText.font.fontSize} init={firstText.fontSize} 
                                    onChange={(index)=>{
                                        setFirstText(prev => {
                                            return {...prev,fontSize:firstText.font.fontSize[index] }
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" placeholder={pageContents.yourText} 
                                onChange={e => {setFirstText(prev => {return {...prev,text: e.target.value}})}}
                            />

                            
                            <label htmlFor="topInput">{pageContents.midleText}</label>
                            <div className={style.Dropdown} style={{zIndex:2}}>
                                <div className={style.fontfamily}>
                                    <Dropdown inputs={fonts} init={secondText.font} 
                                    onChange={(index)=>{
                                        setSecondText(prev => {
                                            return {...prev,font:fonts[index] }
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={secondText.font.fontSize} init={secondText.fontSize} 
                                    onChange={(index)=>{
                                        setSecondText(prev => {
                                            return {...prev,fontSize:secondText.font.fontSize[index] }
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" placeholder={pageContents.yourText} 
                                onChange={e => {setSecondText(prev => {return {...prev,text: e.target.value}})}}
                            />


                            <label htmlFor="bottomInput">{pageContents.bottomText}</label>
                            <div className={style.Dropdown} style={{zIndex:1}}>
                                <div className={style.fontfamily}>
                                    <Dropdown inputs={fonts} init={thirdText.font} 
                                    onChange={(index)=>{
                                        setThirdText(prev => {
                                            return {...prev,font:fonts[index] }
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={thirdText.font.fontSize} init={thirdText.fontSize} 
                                    onChange={(index)=>{
                                        setThirdText(prev => {
                                            return {...prev,fontSize:thirdText.font.fontSize[index]}
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" id="bottomInput" placeholder={pageContents.yourText} onChange={e => {setThirdText(prev => {return {...prev,text: e.target.value}})}}/>


                            <button id="firstBtn" className={style.button} type="button" onClick={handleBottleDesign}>{pageContents.continue}</button>
                        </form>
                    </div>
                    <div className={style.prevewSide}>
                        <div className={style.previewWraper}>
                            <BottlePreview 
                            bottle={oderState.bottle.bottle}
                            firstText={firstText}
                            secondText={secondText}
                            thirdText={thirdText}
                            />
                        </div>
                    </div>
                    <button className={style.button} id="secondBtn" type="button" onClick={handleBottleDesign}>{pageContents.continue}</button>
                </div>
            </div>
        </div>
    )
}
