import Head from 'next/head'
import {useContext} from "react"
import dynamic from 'next/dynamic'

const Bubble  = dynamic(() => import("../library/Bubbles-master"),{ ssr: false })

//context
import {homeContext} from "../context/HomepageContext";

//components
import MainNav from "../components/MainNav"
import HomeBackgound from "../components/HomeBackgound"
import MainFooter from "../components/MainFooter"


export default function Layout({children}) {

    const {content,currentSlide} = useContext(homeContext)

    return (
        <div>
            <Head>
                <title>Amorous</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainNav />
            <MainFooter />
            <HomeBackgound img={content[currentSlide].img}/>
            <Bubble color="255, 255, 255"/>
            {children}
        </div>
    )
}
