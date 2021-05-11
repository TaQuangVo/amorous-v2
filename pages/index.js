
import stylesHome from '../styles/Home.module.css'
import {useContext, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion";

//conponents 
import HomeSlideShow from "../components/HomeSlideShow"
import HomepageContent  from "../components/HomepageContent"
import PageContainer from "../components/PageContainer";


//context
import {homeContext} from "../context/HomepageContext";
import {languageContext} from "../context/LanguageContext";


export default function Home() {

  const {content,currentSlide,setcurrentSlide} = useContext(homeContext)
  const {language,setLanguage} =useContext(languageContext);

  useEffect(() => {
    
  }, [])

  return (
   
      <PageContainer>
        <main className={stylesHome.main}>
          <HomeSlideShow setcurrentSlide = {setcurrentSlide} />
          <AnimatePresence exitBeforeEnter>
            {currentSlide === 0 && <HomepageContent content={content[0]} key={currentSlide}/>}
            {currentSlide === 1 && <HomepageContent content={content[1]} key={currentSlide}/>}
            {currentSlide === 2 && <HomepageContent content={content[2]} key={currentSlide}/>}
          </AnimatePresence>
        </main>
      </PageContainer>
  )
} 
