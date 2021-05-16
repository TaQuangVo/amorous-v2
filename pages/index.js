
import stylesHome from '../styles/Home.module.css'
import {useContext, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image"

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

    const handleScroll = () => {
      const homeSlider = document.getElementById("homeSlider");
      const background = document.getElementById("pageBackground");
      const overlay = document.getElementById("homeSliderOverlay");


      const Yoffset = window.pageYOffset;
      
      const sliderScrollOffset = Yoffset / window.innerHeight;

      if(sliderScrollOffset < 0.8){
        overlay.style.opacity = sliderScrollOffset;
      }

      const paralax = Yoffset * 0.5;

      homeSlider.style.transform = `translateY(${paralax}px)`;
      console.log("translate");
      //background.style.transform = `translateY(${paralax}px)`;

    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
      <div className={stylesHome.container}>
        <div className={stylesHome.homeslider}  id="homeSlider">
          <PageContainer>
            <main className={stylesHome.main}>
              <HomeSlideShow setcurrentSlide = {setcurrentSlide} />
                {currentSlide === 0 && <HomepageContent content={content[0]} key={currentSlide}/>}
                {currentSlide === 1 && <HomepageContent content={content[1]} key={currentSlide}/>}
                {currentSlide === 2 && <HomepageContent content={content[2]} key={currentSlide}/>}
            </main>
          </PageContainer>
          <div className={stylesHome.overlay} id="homeSliderOverlay"></div>
          <div className={stylesHome.scrollDown}>
              <p>Scroll Down</p>
              <svg viewBox="0 0 53.74 89.1">
                  <polygon points="0 9.19 35.35 44.55 0 79.9 9.19 89.09 53.74 44.55 9.19 0 0 9.19"/>
              </svg>
          </div>
        </div>
        <div className={stylesHome.contentContainer}>
          <div className={stylesHome.content}>

            <div className={stylesHome.content__header}>
              <div className={stylesHome.content__imgContainer}>
                  <div className={stylesHome.content__img}>
                    <Image src="/img/homeContentHeader.jpg" width={1800} height={800} layout="responsive" />
                  </div>
              </div>
              
              
              <div className={stylesHome.content__overlay}></div>
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.4)" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,245.3C840,267,960,277,1080,256C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.7)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.66)" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,250.7C672,256,768,288,864,298.7C960,309,1056,299,1152,293.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,1)" fillOpacity="1" d="M0,256L120,261.3C240,267,480,277,720,277.3C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
              
              <div className={stylesHome.content__texts}>
                  <h2>Three way to create your own fragrent</h2>
                  <p>By following serie of simple steps leads to the uniqe and perfect fragrent just for you</p>
              </div>

              <div className={stylesHome.content__showCase}>
                <div>
                  <h2>100+</h2>
                  <p>Famous brands</p>
                </div>
                <div>
                  <h2>50+</h2>
                  <p>Quality ingrediens</p>
                </div>
                <div>
                  <h2>20</h2>
                  <p>Custom design bottle</p>
                </div>
              </div>

            </div>

            <div className={stylesHome.createYO}>
              <p>create</p>
            </div>
            
          </div>
        </div>
      </div>
  )
} 
