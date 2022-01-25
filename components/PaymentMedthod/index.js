import style from "./style.module.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"



export default function index() {
    const cardElementOptions = {
        hidePostalCode: true,
        style:{
            base:{
                color:"rgb(40, 40, 40, 1)",
                fontSize: "13px",
                "::placeholder":{
                    color:"rgb(54, 54, 54)"
                },
                iconColor:"rgb(40, 40, 40, 1)"
            },
            invalid:{
            },
            complete:{
            },
        }
    }
    return (
        <div className={style.container}>
            <div className={style.total}>
                <h2>Total purches</h2>
                <p>120 $</p>
            </div>
            <div className={style.forms}>
                <form className={style.stripeForm}>
                    <input className={style.cardName} type="text" placeholder="Name on card" />
                    <div className={style.cardWraper}>
                        <CardElement id="cardElement" options={cardElementOptions}/>
                    </div>
                    <button>Pay with card</button>
                </form>
                <div className={style.divider}>
                    <span></span>
                    <h4>OR</h4>
                    <span></span>
                </div>
                <button>Paypal</button>
            </div>
        </div>
    )
}
