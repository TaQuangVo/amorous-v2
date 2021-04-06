
import stylesHome from '../styles/Home.module.css'
import {useContext} from "react"

//conponents 
import HomeSlideShow from "../components/HomeSlideShow"
import MainFooter from "../components/MainFooter"
import HomepageContent  from "../components/HomepageContent"


//context
import {homeContext} from "../context/HomepageContext";

export default function Home() {

  const {content,currentSlide,setcurrentSlide} = useContext(homeContext)

  return (
    <div className={stylesHome.container}>


        <main className={stylesHome.main}>
          <HomeSlideShow setcurrentSlide = {setcurrentSlide} />
          {currentSlide === 0 && <HomepageContent content={content[0]}/>}
          {currentSlide === 1 && <HomepageContent content={content[1]}/>}
          {currentSlide === 2 && <HomepageContent content={content[2]}/>}
        </main>
    </div>
  )
} 
