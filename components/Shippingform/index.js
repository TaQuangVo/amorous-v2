import style from "./style.module.css"
import { useState } from "react"

export default function index({submit, init}) {

    const [content, setContent] = useState({
        country:"Country",
        firstname:"First Name",
        lastname:"Last Name",
        street:"Street and House number",
        apartment:"Apartment, suite,etc. (optional)",
        postal:"Postal code",
        city:"City",
        phone:"Phone number",
        saveInfo:"Save this information for next time",
        continue:"Continue",
    })

    const initData = () => {
        if(init == null)
        return {
            country:"",
            firstName:"",
            lastName:"",
            street:"",
            apartment:"",
            postal:"",
            city:"",
            phone:"",
            saveInfo:false
        }
        else return init;
    }

    const [data, setData] = useState(initData)

    const handleOnchange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.id]:e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data)
        submit(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.inputfield}>
                <label htmlFor="country">{content.country}</label>
                <input id="country" type="text" value={data.country} onChange={handleOnchange} required/>
            </div>
            <div className={style.doubleInput}>
                <div className={style.inputfield}>
                    <label htmlFor="firstName">{content.firstname}</label>
                    <input id="firstName" type="text" value={data.firstName} onChange={handleOnchange} required/>
                </div>
                <div className={style.inputfield}>
                    <label htmlFor="lastName">{content.lastname}</label>
                    <input id="lastName" type="text" value={data. lastName} onChange={handleOnchange} required/>
                </div>
            </div>
            <div className={style.inputfield}>
                <label htmlFor="street">{content.street}</label>
                <input id="street" type="text" value={data.street} onChange={handleOnchange} required/>
            </div>
            <div className={style.inputfield}>
                <label htmlFor="apartment">{content.apartment}</label>
                <input id="apartment" type="text" value={data.apartment} onChange={handleOnchange} />
            </div>
            <div className={style.doubleInput}>
                <div className={style.inputfield}>
                    <label htmlFor="postal">{content.postal}</label>
                    <input id="postal" type="text" value={data.postal} onChange={handleOnchange} required/>
                </div>
                <div className={style.inputfield}>
                    <label htmlFor="city">{content.city}</label>
                    <input id="city" type="text" value={data.city} onChange={handleOnchange} required/>
                </div>
            </div>
            <div className={style.inputfield}>
                <label htmlFor="phone">{content.phone}</label>
                <input id="phone" type="text" value={data.phone} onChange={handleOnchange} required/>
            </div>
            <div className={style.saveInfo}>
                <input type="checkbox" value={data.saveInfo} checked={data.saveInfo} id="saveInfo" onChange={(e)=>{
                    setData(prev => ({
                        ...prev,
                        [e.target.id]:e.target.checked
                    }))
                }} />
                <label htmlFor="saveInfo" >{content.saveInfo}</label>
            </div>
            <button className={style.continue} type="submit">{content.continue}</button>
        </form>
    )
}
