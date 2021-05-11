import '../styles/globals.css'
import {useEffect} from "react"
import {AnimatePresence} from "framer-motion"

//components
import Layout from "../components/Layout"

//contexts
import HomepageContextProvider from "../context/HomepageContext";
import LanguageContextProvider from "../context/LanguageContext";
import OderContextProvider from "../context/OderContext";


function MyApp({ Component, pageProps ,router }) {

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty('--vh', window.innerHeight + "px");
    }
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  return (
    <OderContextProvider>
    <LanguageContextProvider>
    <HomepageContextProvider>
    <Layout>
      {/*<AnimatePresence exitBeforeEnter initial={false}>*/}
      <Component {...pageProps } key={router.route}/> 
      {/*</AnimatePresence>*/}
    </Layout>
    </HomepageContextProvider>
    </LanguageContextProvider>
    </OderContextProvider>
  )
}

export default MyApp
