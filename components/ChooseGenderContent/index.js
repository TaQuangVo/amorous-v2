import style from "./style.module.css"
import {motion} from "framer-motion";



export default function ChooseGenderContent({content,onClick}) {

    return (
            <div className={style.contentWraper}>
                <div className={style.content}>
                    <motion.h2
                         initial={{opacity:0 , y:100}}
                         animate={{opacity:1, y:0, transition:{delay:0}}}
                    >{content.header}</motion.h2>
                    <motion.p
                         initial={{opacity:0 , y:100}}
                         animate={{opacity:1, y:0, transition:{delay:0.1}}}
                    >{content.discription}</motion.p>
                    <motion.div
                         initial={{opacity:0 , y:100}}
                         animate={{opacity:1, y:0, transition:{delay:0.2}}}
                    ><button onClick={onClick}>{content.btn}</button></motion.div>
                </div>
            </div>
    )
}
