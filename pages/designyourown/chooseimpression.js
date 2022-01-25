//conponents
import {useContext}  from "react";
import { useRouter } from 'next/router'

//context
import {oderDispatchContext} from "../../context/OderContext";
import {oderStateContext} from "../../context/OderContext";

import PageContainer from "../../components/PageContainer"
import SlideSelect from "../../components/SlideSelect"

import {femaleImpression,maleImpression} from "../../src/impressions"


export default function DesignYourOwn() {
    
    const router = useRouter()
    const oderDispatch = useContext(oderDispatchContext);
    const oderState = useContext(oderStateContext);

    let impressions

    if(oderState.CYO.gender == "Male"){
        impressions = maleImpression
    }else{
        impressions = femaleImpression
    }

    const content = {
        header: "Let Us Choose For You",
        discription:"Choose an impression"
    }

    const handleOnClick = (currentSlide) => {
        oderDispatch({
            type: "SETIMPRESSION_CYO",
            payload: impressions[currentSlide],
        })
        
        router.push("/designyourown/chooseingredients");
    }

    return (          
           <PageContainer>
               <SlideSelect  data={impressions} handleOnClick={handleOnClick} content={content}/>
           </PageContainer>
    )
}
