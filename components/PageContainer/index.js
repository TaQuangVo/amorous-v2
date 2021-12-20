import style from "./style.module.css";
import {motion} from "framer-motion";


export default function PageContainer({children}) {
    return (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.3}}
            className={style.container}>
                {children}
            </motion.div>
    )
}
