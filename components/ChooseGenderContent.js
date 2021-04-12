import styleChooseGenderContent from "../styles/ChooseGenderContent.module.css"
import {motion} from "framer-motion";



export default function ChooseGenderContent({content,onClick}) {

    return (
            <div className={styleChooseGenderContent.contentWraper}>
                <div className={styleChooseGenderContent.content}>
                    <motion.h2
                         initial={{opacity:0 , y:100}}
                         animate={{opacity:1, y:0, transition:{delay:0}}}
                         exit={{y:100}}
                    >Male</motion.h2>
                    <motion.p
                         initial={{opacity:0 , y:100}}
                         animate={{opacity:1, y:0, transition:{delay:0.1}}}
                         exit={{y:100}}
                    >Create the perfect male fragrance</motion.p>
                    <motion.div
                         initial={{opacity:0 , y:100}}
                         animate={{opacity:1, y:0, transition:{delay:0.2}}}
                         exit={{y:100}}
                    ><button onClick={onClick}>Let's create</button></motion.div>
                </div>
            </div>
    )
}
