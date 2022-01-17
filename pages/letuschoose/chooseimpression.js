//conponents
import {useContext}  from "react";
import { useRouter } from 'next/router'

//context
import {oderContext} from "../../context/OderContext";

import PageContainer from "../../components/PageContainer"
import SlideSelect from "../../components/SlideSelect"

import {femaleImpression,maleImpression} from "../../src/impressions"


export default function DesignYourOwn() {
    
    const router = useRouter()
    const {oder, setOder, Male, Female} = useContext(oderContext);

    let impressions

    if(oder.gender === Male){
        impressions = maleImpression
    }else if(oder.gender === Female){
        impressions = femaleImpression
    }else{
        impressions = femaleImpression
    }

    const content = {
        header: "Let Us Choose For You",
        discription:"Choose an impression"
    }

    const handleOnClick = (currentSlide) => {
        setOder(prev => {
            return {
                ...prev,
                charactor:impressions[currentSlide].header,
            }
         });
         router.push("/packaging");
    }

    return (          
           <PageContainer>
               <SlideSelect  data={impressions} handleOnClick={handleOnClick} content={content}/>
           </PageContainer>
    )
}
