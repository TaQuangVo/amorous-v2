import style from "./style.module.css"
import Link from "next/link"

import IngredientsPreview from "../IngredientsOderPreview"
import BottlePreview from "../BottlePreview"
import BoxPreview from "../BoxPreview"

export default function index({oder}) {
    const CYO = oder.CYO
    const bottle = oder.bottle
    const box = oder.box



    return (
        <div className={style.container}>
            <h1>Oder Preview</h1>

            <h2>Type</h2>
            <p>{CYO.name == null ? "Not selected" : CYO.name}</p>

            <h2>Gender</h2>
            <p>{CYO.gender == null ? "Not selected" : CYO.gender}</p>

            <h2>Charactor</h2>
            <p>{CYO.charactor == null ? "Not selected" : CYO.charactor.header}</p>

            <h2>Impression</h2>
            <p>{CYO.impression == null ? "Not selected" : CYO.impression.header}</p>

            <h2>Ingredients</h2>
            <IngredientsPreview ingredients = {CYO.ingredients}/>

            <h2>Bottle</h2>
            <BottlePreview 
                bottle={bottle.bottle === null ? {
                    id:1,
                    url:"/bottles/signac_1new.png",
                    name:"BottleOne",
                    topText:{
                        y:35,
                        xOffset:0,
                        rotate:0,
                        maxWidth: 30,
                    },
                    bottomText:{
                        y:83,
                        xOffset:0,
                        rotate:0,
                        maxWidth: 30,
                    }
                } : bottle.bottle}
                firstText={bottle.firstText}
                secondText={bottle.secondText}
                thirdText={bottle.thirdText}
            />

            <h2>Box</h2> 
            <BoxPreview box={box.box} text={box.text} />

            <h2>Tottal cost</h2>
            <p>150 $</p>

            <Link href="/checkout/payment"><button>Proceed payment</button></Link>


        </div>
    )
}
