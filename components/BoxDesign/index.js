import Head from 'next/head'
import { useRouter } from 'next/router'
import style from './style.module.css'
import {useState, useContext,useEffect} from "react"

//components 
import Dropdown from "../Dropdown";
import BoxPreview from "../BoxPreview"

//data
import {fontFamily} from "../../src/fontFamily"
const fonts = fontFamily

//context
import {oderDispatchContext} from "../../context/OderContext";
import {oderStateContext} from "../../context/OderContext";

export default function boxDesign({redirectLink}) {

  const router = useRouter();


  const [text, setText] = useState({
    text:"",
    font:fonts[0],
    fontSize:fonts[0].fontSize[1],
  })

  const oderDispatch  = useContext(oderDispatchContext);
  const oderState  = useContext(oderStateContext);



  const handleInputChange = (text) => {
    setText(prev => {
      return{
        ...prev,
        text:text,
      }
    })
  }
  const handleContinue = () => {
    oderDispatch({
      type:"SETBOXDESIGN",
      payload: text,
    })

    router.push(redirectLink)
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
    <div className={style.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <div className={style.input}>
            <h1>{pageContent.header}</h1>
            <p className={style.discription}>{pageContent.subs}</p>
            <label htmlFor="boxInput">{pageContent.fontSetting}</label>
            <div className={style.fontStyle}>
              <div className={style.font}>
                <Dropdown 
                    inputs={fonts} 
                    init={text.font} 
                    onChange={(index)=>{
                      setText(prev => {
                          return {...prev,font:fonts[index]}
                      })}
                  }/>
                </div>
                <div className={style.size}>
                  <Dropdown 
                    inputs={text.font.fontSize} 
                    init={text.fontSize} 
                    onChange={(index)=>{
                      setText(prev => {
                          return {...prev,fontSize:text.font.fontSize[index]}
                      })}
                  }/>
                </div>
            </div>
            
            <label htmlFor="boxInput">{pageContent.textLable}</label>
            <textarea 
            placeholder={pageContent.textPlaceholder}
            id="boxInput"
            onChange={(e)=>{;handleInputChange(e.target.value)}}/>
            <button className={style.mainBtn} onClick={handleContinue}>{pageContent.btn}</button>
        </div>
          <BoxPreview box={oderState.box.box} text={text}/>
          <button className={style.sndBtn} onClick={handleContinue}>{pageContent.btn}</button>
      </main>
    </div>
  )
}
