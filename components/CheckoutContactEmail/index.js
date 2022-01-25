import {useState} from 'react';
import style from "./style.module.css"
import {validateEmail} from "../../helpers/helperFunk"

export default function CheckoutEmail({handleSubmit, init}) {

    const [email, setEmail] = useState(init);

    const [content, setContent] = useState({
        email:"Contact Email",
    })

    const submit = () => {
        if(validateEmail(email))
        {
            handleSubmit(email)
        }
    }

  return <form className={style.form}>
            <label htmlFor="email"  name="email">{content.email}</label>
            <input className={style.inputfield} type="email" id="email" value={email} onChange={ e => setEmail(e.target.value) } autoComplete="username"/>
            <input className={style.inputSubmit} type="button" value={"Continue"} onClick={submit}></input>
            <p>Make sure your email is right!!!</p> 
        </form>
}
