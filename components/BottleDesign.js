import {useEffect, useState, useContext}  from "react";
import styleBottleDesign from "../styles/BottleDesign.module.css"
import { useRouter } from 'next/router'

//data
import {fontSize} from "../src/fontSize"
import {fontFamily} from "../src/fontFamily"

//context
import {oderContext} from "../context/OderContext";

//conponents
import BottlePreview from "./BottlePreview"
import Dropdown from "./Dropdown";

export default function BottleDesign({redirectLink}) {

    const {oder,setBottleDesign,bottleDesign} = useContext(oderContext);
    const fonts = fontFamily;
    const router = useRouter();

    const [firstText, setFirstText] = useState({
        text:"",
        fontfamily:fontFamily[0],
        fontSize:fontSize[5],
    })
    const [secondText, setSecondText] = useState({
        text:"",
        fontfamily:fontFamily[0],
        fontSize:fontSize[5],
    })
    const [thirdText, setThirdText] = useState({
        text:"",
        fontfamily:fontFamily[0],
        fontSize:fontSize[5],
    })

    useEffect(() => {
        let root = document.documentElement
        root.style.setProperty("--font-size-two", `${secondText.fontSize.text}px`);
        root.style.setProperty("--font-fam-two", `${secondText.fontfamily.fontFamily}`);
    }, [secondText.fontSize, secondText.fontfamily])
    useEffect(() => {
        let root = document.documentElement
        root.style.setProperty("--font-size-one", `${firstText.fontSize.text}px`);
        root.style.setProperty("--font-fam-one", `${firstText.fontfamily.fontFamily}`);
    }, [firstText.fontSize, firstText.fontfamily])
    useEffect(() => {
        let root = document.documentElement
        root.style.setProperty("--font-size-three", `${thirdText.fontSize.text}px`);
        root.style.setProperty("--font-fam-three", `${thirdText.fontfamily.fontFamily}`);
    }, [thirdText.fontSize, thirdText.fontfamily])

    useEffect(() => {
        console.log(oder,bottleDesign)
    }, [])


    const handleBottleDesign = () => {
        setBottleDesign(prev =>{
            return {
                ...prev,
                firstText:firstText,
                secondText:secondText,
            }
        });
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
        <div  className={styleBottleDesign.container}>
            <div className={styleBottleDesign.scroller}>
                <div className={styleBottleDesign.header}>
                    <h1>{pageContents.header}</h1>
                    <p>{pageContents.sub}</p>
                </div>
                <div className={styleBottleDesign.body}>
                    <div className={styleBottleDesign.inputSide}>
                        <form>
                            <label htmlFor="topInput">{pageContents.topText}</label>
                            <div className={styleBottleDesign.Dropdown} style={{zIndex:3}}>
                                <div className={styleBottleDesign.fontfamily}>
                                    <Dropdown inputs={fonts} init={firstText.fontfamily} 
                                    onChange={(index)=>{
                                        setFirstText(prev => {
                                            return {...prev,fontfamily:fonts[index] }
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={fontSize} init={firstText.fontSize} 
                                    onChange={(index)=>{
                                        setFirstText(prev => {
                                            return {...prev,fontSize:fontSize[index] }
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" placeholder={pageContents.yourText} onChange={e => {setFirstText(prev => {return {...prev,text: e.target.value}})}}/>
                            <label htmlFor="topInput">{pageContents.midleText}</label>
                            <div className={styleBottleDesign.Dropdown} style={{zIndex:2}}>
                                <div className={styleBottleDesign.fontfamily}>
                                    <Dropdown inputs={fonts} init={secondText.fontfamily} 
                                    onChange={(index)=>{
                                        setSecondText(prev => {
                                            return {...prev,fontfamily:fonts[index] }
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={fontSize} init={secondText.fontSize} 
                                    onChange={(index)=>{
                                        setSecondText(prev => {
                                            return {...prev,fontSize:fontSize[index] }
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" placeholder={pageContents.yourText} onChange={e => {setSecondText(prev => {return {...prev,text: e.target.value}})}}/>
                            <label htmlFor="bottomInput">{pageContents.bottomText}</label>
                            <div className={styleBottleDesign.Dropdown} style={{zIndex:1}}>
                                <div className={styleBottleDesign.fontfamily}>
                                    <Dropdown inputs={fonts} init={thirdText.fontfamily} 
                                    onChange={(index)=>{
                                        setThirdText(prev => {
                                            return {...prev,fontfamily:fonts[index] }
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={fontSize} init={thirdText.fontSize} 
                                    onChange={(index)=>{
                                        setThirdText(prev => {
                                            return {...prev,fontSize:fontSize[index] }
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" id="bottomInput" placeholder={pageContents.yourText} onChange={e => {setThirdText(prev => {return {...prev,text: e.target.value}})}}/>
                            <button id="firstBtn" className={styleBottleDesign.button} type="button" onClick={handleBottleDesign}>{pageContents.continue}</button>
                        </form>
                    </div>
                    <div className={styleBottleDesign.prevewSide}>
                        <div className={styleBottleDesign.previewWraper}>
                            <BottlePreview 
                            bottle={bottleDesign.bottle === null ? {
                                id:1,
                                url:"/bottles/signac_1new.png",
                                name:"BottleOne",
                                topText:{
                                    y:35,
                                    xOffset:0,
                                    rotate:0,
                                    maxWidth: 30,
                                },
                                bottomText:{
                                    y:83,
                                    xOffset:0,
                                    rotate:0,
                                    maxWidth: 30,
                                }
                            } : bottleDesign.bottle}
                            firstText={firstText.text}
                            secondText={secondText.text}
                            thirdText={thirdText.text}
                            />
                        </div>
                    </div>
                    <button className={styleBottleDesign.button} id="secondBtn" type="button" onClick={handleBottleDesign}>{pageContents.continue}</button>
                </div>
            </div>
        </div>
    )
}
