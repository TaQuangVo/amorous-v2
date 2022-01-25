import style from "./style.module.css"
import { useState, useContext } from "react"
import PageContainer from "../../../components/PageContainer"

import {isOrderValid} from "../../../helpers/oderVerification"

import CheckoutLogin from "../../../components/CheckoutLogin"
import ShippingForm from "../../../components/Shippingform"
import PaymentMedthod from "../../../components/PaymentMedthod"
import CheckoutContactEmail from "../../../components/CheckoutContactEmail"

import {oderStateContext} from "../../../context/OderContext";




export default function Payment() {
    const [content, setContent] = useState({
        checkout:"Checkout",
        contactInfo:"1. Contact Info",
        account:"1. Account",
        shipping:"2. Shipping Info",
        paymentmed:"3. Paymnet medthod"
    })

    
    const oderState = useContext(oderStateContext)

    try{
        console.log(isOrderValid(oderState))
    }catch(err){
        console.log(err)
    }

    console.log(oderState)

    const [currentStep, setCurrentStep] = useState(1);
    const [isAccout, setIsAccout] = useState(true);

    const [contactEmail, setContactEmail] = useState("")
    const [shipingInfo, setShipingInfo] = useState(null)


    const handleAccoutSubmit = (email) => {
        if(!isAccout){
            setContactEmail(email)
        }
        setCurrentStep(2);
    }

    const handleShippingSubmit = (data) => {
        setShipingInfo(data)
        setCurrentStep(3)
    }

    return (
        <PageContainer >
            <div className={style.container}>
                <div className={style.scroller}>
                    <h1>{content.checkout}</h1>
                    <div className={style.account}>
                        <div className={style.title}>
                            <h2>{isAccout ? content.account : content.contactInfo}</h2>
                            <h4 onClick={()=>setCurrentStep(1)}>{currentStep > 1 ? "Edit" : ""}</h4>
                        </div>
                        {(currentStep == 1 && isAccout) && (<>
                            <CheckoutLogin next={handleAccoutSubmit}/>
                            <p onClick={()=>setIsAccout(false)}>Skip creating accout</p>
                        </>)}
                        {(currentStep == 1 && !isAccout) && (<>
                            <CheckoutContactEmail handleSubmit={handleAccoutSubmit} init={contactEmail}/>
                            <p onClick={()=>setIsAccout(true)}>Create Accout</p>
                        </>)}
                        {(currentStep > 1 && isAccout) && (<>
                            <span className={style.discription}>Login as: Danxawe</span>
                        </>)}
                        {(currentStep > 1 && !isAccout) && (<>
                            <span className={style.discription}>Email: {contactEmail} </span>
                        </>)}
                    </div>
                    <div className={style.shipping}>
                        <div className={style.title}>
                        <h2>{content.shipping}</h2>
                            <h4 onClick={()=>setCurrentStep(2)}>{currentStep > 2 ? "Edit" : ""}</h4>
                        </div>
                        {currentStep == 2 && <ShippingForm submit={handleShippingSubmit} init={shipingInfo}/>}
                        {currentStep > 2 && (
                            <div className={style.shipingDiscription}>
                                <span className={style.discription}>{`${shipingInfo.firstName} ${shipingInfo.lastName}`}</span>
                                <span className={style.discription}>{`${shipingInfo.street}, ${shipingInfo.postal}, ${shipingInfo.city}, ${shipingInfo.city}`}</span>
                                <span className={style.discription}>{`${shipingInfo.phone}`}</span>
                            </div>
                        )}
                    </div>
                    <div className={style.paymentMedthod}>
                        <h2>{content.paymentmed}</h2>
                        {currentStep == 3 && <PaymentMedthod email={contactEmail} oder={oderState} email={contactEmail} shipingInfo={shipingInfo}/>}
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}
