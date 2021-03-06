import {useContext}  from "react";
import { useRouter } from 'next/router'

//context
import {oderContext} from "../../context/OderContext";

import PageContainer from "../../components/PageContainer"
import SlideSelect from "../../components/SlideSelect"

import {occasion} from "../../src/occasion"



export default function chooseOccasion() {
    
    const router = useRouter()
    const {oder, setOder} = useContext(oderContext);

    const content = {
        header:"Let Us Choose For You",
        discription:"Choose a occasion",
    }

    const handleOnClick = (currentSlide) => {
        setOder(prev => {
            return {
                ...prev,
                charactor:occasion[currentSlide].header,
            }
         });
    
         console.log(currentSlide)
         router.push("/letuschoose/choosecharactor");
    }

    return (          
           <PageContainer>
               <SlideSelect  data={occasion} handleOnClick={handleOnClick} content={content}/>
           </PageContainer>
    )
}
