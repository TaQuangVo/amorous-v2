import styleHomepageContent from "../styles/HomepageContent.module.css"
import {motion} from "framer-motion";
import Link from "next/link"


export default function HpmepageContent({content}) {

    return (
            <div className={styleHomepageContent.content}>
                <motion.h1
                    initial={{opacity:0 , y:100}}
                    animate={{opacity:1, y:0, transition:{delay:0}}}
                    exit={{opacity:0 , transition:{delay:0.3}}}
                >{content.header}<br/>{content.header2}</motion.h1>
                <motion.div 
                    className={styleHomepageContent.divider}
                    initial={{opacity:0 , y:100}}
                    animate={{opacity:1, y:0, transition:{delay:0.1}}}
                    exit={{opacity:0 ,transition:{delay:0.2}}}
                ></motion.div>
                <motion.p
                    initial={{opacity:0 , y:100}}
                    animate={{opacity:1, y:0, transition:{delay:0.2}}}
                    exit={{opacity:0 ,transition:{delay:0.1}}}
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</motion.p>
                <Link href={content.url}>
                    <motion.button
                        initial={{opacity:0 , y:100}}
                        animate={{opacity:1, y:0, transition:{delay:0.3}}}
                        exit={{opacity:0 ,transition:{delay:0}}}
                    >Lorem ipsum</motion.button>
                </Link>
            </div>
    )
}
