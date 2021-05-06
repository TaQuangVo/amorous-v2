import stylePageContainer from "../styles/Pagecontainer.module.css";
import {motion} from "framer-motion";

export default function PageContainer({children}) {
    return (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className={stylePageContainer.container}>
                {children}
            </motion.div>
    )
}
