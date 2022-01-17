import style from "./style.module.css"
import Image from "next/image"

export default function index({ingredients}) {

    if(ingredients == null){
        return <p className={style.noIngredients}>No ingredients selected!</p>
    }

    return (
        <div className={style.container}>
            {ingredients.map(data => (
                <div className={style.ingredient} key={data.id}>
                    <div className={style.imageWraper}>
                        <Image  src={data.url} layout="fill" objectFit="contain" objectPosition="center center" alt={data.alt} />
                    </div>
                    <p>{data.alt}</p>
                </div>
            ))}
        </div>
    )
}
