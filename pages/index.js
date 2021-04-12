
import stylesHome from '../styles/Home.module.css'
import {useContext, useEffect} from "react"
import {motion} from "framer-motion";

//conponents 
import HomeSlideShow from "../components/HomeSlideShow"
import HomepageContent  from "../components/HomepageContent"


//context
import {homeContext} from "../context/HomepageContext";
import {languageContext} from "../context/LanguageContext";
import {oderContext} from "../context/OderContext";

export default function Home() {

  const {content,currentSlide,setcurrentSlide} = useContext(homeContext)
  const {language,setLanguage} =useContext(languageContext);
  const {gender,setGender} =useContext(oderContext);

  useEffect(() => {
    console.log(gender);
  }, [])

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{y:100}}
    className={stylesHome.container}>


        <main className={stylesHome.main}>
          <HomeSlideShow setcurrentSlide = {setcurrentSlide} />
          {currentSlide === 0 && <HomepageContent content={content[0]}/>}
          {currentSlide === 1 && <HomepageContent content={content[1]}/>}
          {currentSlide === 2 && <HomepageContent content={content[2]}/>}
        </main>
    </motion.div>
  )
} 
