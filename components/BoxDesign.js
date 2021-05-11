import Head from 'next/head'
import styles from '../styles/Boxdesign.module.css'
import Image from "next/image"
import {useState, useContext,useEffect,useRef} from "react"

//components 
import Dropdown from "./Dropdown";

//data
import {fontSize} from "../src/fontSize"
import {fontFamily} from "../src/fontFamily"

//context
import {oderContext} from "../context/OderContext";

export default function boxDesign() {


  const [text, setText] = useState({
    text:"",
    font:fontFamily[0],
    fontSize:fontSize[0],
  })

  const {oder,bottleDesign,setBoxDesign, boxDesign} = useContext(oderContext);


  useEffect(() => {
    let root = document.documentElement
    root.style.setProperty("--boxPreview-fontSize", `${text.fontSize.text}px`);
    root.style.setProperty("--boxPreview-font", `${text.font.fontFamily}`);
}, [text.fontSize, text.font])



  const handleInputChange = (text) => {
    setText(prev => {
      return{
        ...prev,
        text:text,
      }
    })
  }
  const handleContinue = () => {
    setBoxDesign(prev => {
      return {
        ...prev,
        text:text,
      }
    });
    console.log(oder,bottleDesign, boxDesign)
  }
  const pageContent = {
    header:"Design your packaging",
    subs:"Put some love text to the one",
    fontSetting:"Font and font size",
    textLable:"Write To your box",
    textPlaceholder:"Your text here will be writen to the packaging",
    btn:"Continue"
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.input}>
            <h1>{pageContent.header}</h1>
            <p className={styles.discription}>{pageContent.subs}</p>
            <label htmlFor="boxInput">{pageContent.fontSetting}</label>
            <div className={styles.fontStyle}>
              <div className={styles.font}>
                <Dropdown 
                    inputs={fontFamily} 
                    init={text.font} 
                    onChange={(index)=>{
                      setText(prev => {
                          return {...prev,font:fontFamily[index]}
                      })}
                  }/>
                </div>
                <div className={styles.size}>
                  <Dropdown 
                    inputs={fontSize} 
                    init={text.fontSize} 
                    onChange={(index)=>{
                      setText(prev => {
                          return {...prev,fontSize:fontSize[index]}
                      })}
                  }/>
                </div>
            </div>
            
            <label htmlFor="boxInput">{pageContent.textLable}</label>
            <textarea 
            placeholder={pageContent.textPlaceholder}
            id="boxInput"
            onChange={(e)=>{;handleInputChange(e.target.value)}}/>
            <button className={styles.mainBtn} onClick={handleContinue}>Continue</button>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.controller}>
            <div className={styles.box} >
                <div className={styles.top}> 
                    <Image src="/boxes/boxOne/top.jpg" layout="fill" />
                    <div className={styles.boxsidesOverlay}></div>
                </div>
                <div className={styles.right}>
                    <Image src="/boxes/boxOne/left.jpg" layout="fill" />
                    <div className={styles.boxsidesOverlay}></div>
                </div>
                <div className={styles.left}>
                    <Image src="/boxes/boxOne/left.jpg" layout="fill" />
                    <div className={styles.boxsidesOverlay}></div>
                </div>
                <div className={styles.bottom}>
                    <Image src="/boxes/boxOne/top.jpg" layout="fill" />
                    <div className={styles.boxsidesOverlay}></div>
                </div>
                <div className={styles.front}>
                    <Image src="/boxes/boxOne/front.jpg" layout="fill" />
                    <div className={styles.boxsidesOverlay}></div>
                </div>
                <div className={styles.back}>
                    <Image src="/boxes/boxOne/back.jpg" layout="fill" />
                    <div className={styles.boxsidesOverlay}></div>
                    <span>{text.text}</span>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.sndBtn} onClick={handleContinue}>{pageContent.btn}</button>
      </main>
    </div>
  )
}
