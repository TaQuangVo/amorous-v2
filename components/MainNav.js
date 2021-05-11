import styleMainNav from "../styles/MainNav.module.css"
import Link from "next/link"
import Image from "next/image"
import {useRef, useState} from "react"
import {AnimatePresence, motion} from "framer-motion";

export default function MainNav() {

    const [content, setContent] = useState({
        start:"Start",
        about:"About",
        contact:"Contact",
        policy:"Policy",
        signIn:"Signin"
    })

    const [navActive, setNavActive] = useState(false);

    let menuLinks = useRef(null);
    let hambuger = useRef(null);
    const handleOnBurgerClick = () => {
        hambuger.classList.toggle("hamburger--active") 
        menuLinks.classList.toggle("linksMenu--active")

        if(menuLinks.classList.contains("linksMenu--active")){
            setNavActive(true);
        }else {
            setNavActive(false);
        }
    }
    
    return (
        <nav className={styleMainNav.nav}>
            <div className={styleMainNav.navContainer}>
                <div ref={el => menuLinks = el} className={styleMainNav.linksMenu}>
                    <AnimatePresence>
                        {navActive && <div key={navActive}> <motion.div 
                        initial={{opacity:0 , y:100}} 
                        animate={{opacity:1, y:0, transition:{delay:0}}}
                        exit={{opacity:0 , transition:{delay:0.4}}}
                        onClick={handleOnBurgerClick}><Link href="/">{content.start}</Link></motion.div>
                        <motion.div 
                        initial={{opacity:0 , y:100}} 
                        animate={{opacity:1, y:0, transition:{delay:0.1}}}
                        exit={{opacity:0 , transition:{delay:0.3}}}
                        onClick={handleOnBurgerClick}><Link href="#">{content.about}</Link></motion.div>
                        <motion.div 
                        initial={{opacity:0 , y:100}} 
                        animate={{opacity:1, y:0, transition:{delay:0.2}}}
                        exit={{opacity:0 , transition:{delay:0.2}}}
                        onClick={handleOnBurgerClick}><Link href="#">{content.contact}</Link></motion.div>
                        <motion.div  
                        initial={{opacity:0 , y:100}} 
                        animate={{opacity:1, y:0, transition:{delay:0.3}}}
                        exit={{opacity:0 , transition:{delay:0.1}}}
                        onClick={handleOnBurgerClick}><Link href="#">{content.policy}</Link></motion.div>
                        <motion.div  
                        initial={{opacity:0 , y:100}} 
                        animate={{opacity:1, y:0, transition:{delay:0.4}}}
                        exit={{opacity:0 , transition:{delay:0}}}
                        onClick={handleOnBurgerClick}>
                            <Link href="#" >
                                <div className={styleMainNav.signInBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.5 51.5">
                                    <path d="M960.38,565.39a25.75,25.75,0,1,1,25.75-25.75A25.78,25.78,0,0,1,960.38,565.39Zm0-48.92a23.18,23.18,0,1,0,23.17,23.17A23.2,23.2,0,0,0,960.38,516.47Z" transform="translate(-934.63 -513.89)"/>
                                    <path d="M965.56,540.24a9,9,0,1,0-10.36,0,15.05,15.05,0,0,0-9.84,14.1h2.57a12.45,12.45,0,0,1,24.9,0h2.57A15.05,15.05,0,0,0,965.56,540.24Zm-11.62-7.36a6.44,6.44,0,1,1,6.44,6.44A6.44,6.44,0,0,1,953.94,532.88Z" transform="translate(-934.63 -513.89)"/>
                                </svg>
                                <p>{content.signIn}</p>
                                </div>
                            </Link>
                        </motion.div> </div>}
                    </AnimatePresence>
                </div>
                <div className={styleMainNav.nav__logo}>
                    <Link href="/">
                    <a><Image src="/icons/mainLogo.png" alt="Main Logo" width={364} height={120} ></Image></a>              
                    </Link>           
                </div>
                <div ref={el => hambuger = el} className={styleMainNav.hamburger} onClick={handleOnBurgerClick}>
                    <div className={styleMainNav.icon}></div>
                </div>
            </div>
        </nav>
    )
}
