import {useEffect, useState, useContext}  from "react";
import styleBottleDesign from "../styles/BottleDesign.module.css"
import domtoimage from 'dom-to-image';

//data
import {fontSize} from "../src/fontSize"
import {fontFamily} from "../src/fontFamily"

//context
import {oderContext} from "../context/OderContext";

//conponents
import BottlePreview from "./BottlePreview"
import Dropdown from "./Dropdown";

export default function BottleDesign() {

    const {oder} = useContext(oderContext);
    const fonts = fontFamily;

    const [firstText, setFirstText] = useState({
        text:"",
        fontfamily:0,
        fontSize:5,
    })
    const [secondText, setSecondText] = useState({
        text:"",
        fontfamily:0,
        fontSize:5,
    })
    const [thirdText, setThirdText] = useState({
        text:"",
        fontfamily:0,
        fontSize:5,
    })

    useEffect(() => {
        let root = document.documentElement
        root.style.setProperty("--font-size-two", `${fontSize[secondText.fontSize].text}px`);
        root.style.setProperty("--font-fam-two", `${fonts[secondText.fontfamily].fontfamily}px`);
    }, [secondText.fontSize, secondText.fontfamily])
    useEffect(() => {
        let root = document.documentElement
        root.style.setProperty("--font-size-one", `${fontSize[firstText.fontSize].text}px`);
        root.style.setProperty("--font-fam-one", `${fonts[firstText.fontfamily].fontfamily}px`);
    }, [firstText.fontSize, firstText.fontfamily])
    useEffect(() => {
        let root = document.documentElement
        root.style.setProperty("--font-size-three", `${fontSize[thirdText.fontSize].text}px`);
        root.style.setProperty("--font-fam-three", `${fonts[thirdText.fontfamily].fontfamily}px`);
    }, [thirdText.fontSize, thirdText.fontfamily])

    useEffect(() => {
        console.log(oder)
    }, [])


    const handleBottleDesign = () => {
        var node = document.getElementById('bottle-preview');
        var popUp = document.getElementById("imgPreviewPopUp");
        var popUpBackground = document.getElementById("imgPreviewPopUp-Background");

        domtoimage.toBlob(node)
        .then(function (blob) {
            var img = new Image();
            var urlCreator = window.URL || window.webkitURL;
            img.src = urlCreator.createObjectURL(blob);
            popUpBackground.appendChild(img);
            popUp.classList.add("showPopUp");
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }

    const pageContents = {
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
                    <h1>Design your bottle</h1>
                    <p>Make the bottle personale by writting something meaningful</p>
                </div>
                <div className={styleBottleDesign.body}>
                    <div className={styleBottleDesign.inputSide}>
                        <form>
                            <label htmlFor="topInput">{pageContents.topText}</label>
                            <div className={styleBottleDesign.Dropdown} style={{zIndex:3}}>
                                <div className={styleBottleDesign.fontfamily}>
                                    <Dropdown inputs={fonts} initIndex={firstText.fontfamily} 
                                    onChange={(index)=>{
                                        setFirstText(prev => {
                                            return {...prev,fontfamily:index}
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={fontSize} initIndex={firstText.fontSize} 
                                    onChange={(index)=>{
                                        setFirstText(prev => {
                                            return {...prev,fontSize:index}
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" placeholder={pageContents.yourText} onChange={e => {setFirstText(prev => {return {...prev,text: e.target.value}})}}/>
                            <label htmlFor="topInput">{pageContents.midleText}</label>
                            <div className={styleBottleDesign.Dropdown} style={{zIndex:2}}>
                                <div className={styleBottleDesign.fontfamily}>
                                    <Dropdown inputs={fonts} initIndex={secondText.fontfamily} 
                                    onChange={(index)=>{
                                        setSecondText(prev => {
                                            return {...prev,fontfamily:index}
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={fontSize} initIndex={secondText.fontSize} 
                                    onChange={(index)=>{
                                        setSecondText(prev => {
                                            return {...prev,fontSize:index}
                                        })}
                                    }/>
                                </div>
                            </div>
                            <input autoComplete="off" placeholder={pageContents.yourText} onChange={e => {setSecondText(prev => {return {...prev,text: e.target.value}})}}/>
                            <label htmlFor="bottomInput">{pageContents.bottomText}</label>
                            <div className={styleBottleDesign.Dropdown} style={{zIndex:1}}>
                                <div className={styleBottleDesign.fontfamily}>
                                    <Dropdown inputs={fonts} initIndex={thirdText.fontfamily} 
                                    onChange={(index)=>{
                                        setThirdText(prev => {
                                            return {...prev,fontfamily:index}
                                        })}
                                    }/>
                                </div>
                                <div>
                                    <Dropdown inputs={fontSize} initIndex={thirdText.fontSize} 
                                    onChange={(index)=>{
                                        setThirdText(prev => {
                                            return {...prev,fontSize:index}
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
                            imageUrl="/bottles/signac_1new.png"
                            firstText={firstText.text}
                            secondText={secondText.text}
                            thirdText={thirdText.text}
                            />
                        </div>
                    </div>
                    <button className={styleBottleDesign.button} id="secondBtn" type="button" onClick={handleBottleDesign}>{pageContents.continue}</button>
                    <div className={styleBottleDesign.imgPreview} id="imgPreviewPopUp" style={{zIndex:4}}>
                        <div className={styleBottleDesign.popUpBackground} id="imgPreviewPopUp-Background">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
