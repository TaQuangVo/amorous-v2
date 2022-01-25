import Head from 'next/head'
import {useContext,useState, useEffect} from "react"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Bubble  = dynamic(() => import("../../library/Bubbles-master"),{ ssr: false })

//context
import {homeContext} from "../../context/HomepageContext";

//components
import MainNav from "../MainNav"
import HomeBackgound from "../HomeBackground"
import MainFooter from "../MainFooter"


export default function Layout({children}) {

    const {content,currentSlide} = useContext(homeContext)
    const [showFooter, setShowFooter] = useState(true);
    const [showBackground, setShowBackground] = useState(true);
    const router = useRouter();

    useEffect(()=>{
        const route = router.route
        if(route === "/"){
            setShowFooter(false);
        }else{
            setShowFooter(true);
        }

    },[router]);

    return (
        <div style={{height: "100vh", position:"relative"}}>
            <Head>
                <title>Amorous</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainNav />
            {showFooter && <MainFooter />}
            {showBackground && <HomeBackgound img={content[currentSlide].img}/>}
            <Bubble color="255, 255, 255"/>
            {children}
        </div>
    )
}
