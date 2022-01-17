import {useContext}  from "react";
import { useRouter } from 'next/router'

//context
import {oderContext} from "../../context/OderContext";

import PageContainer from "../../components/PageContainer"
import SlideSelect from "../../components/SlideSelect"

import {charactors} from "../../src/charactors-letuschose"



export default function chooseCharactor() {
    
    const router = useRouter()
    const {oder, setOder} = useContext(oderContext);

    const content = {
        header:"Let Us Choose For You",
        discription:"Choose a charactor",
    }

    const handleOnClick = (currentSlide) => {
        setOder(prev => {
            return {
                ...prev,
                charactor:charactors[currentSlide].header,
            }
         });
         
         console.log(currentSlide)
         router.push("/letuschoose/chooseimpression");
    }

    return (          
           <PageContainer>
               <SlideSelect  data={charactors} handleOnClick={handleOnClick} content={content}/>
           </PageContainer>
    )
}
