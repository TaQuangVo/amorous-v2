import {data as ingredienData} from "../src/ingrediensData"

import {bottleShapes as bottles} from "../src/bottleShapes"

const odertypes = [
    "Create Your Own",
    "Let Us Choose",
    "Global Brands After Your Design"
]

const genders = [
    "Female",
    "Male"
]

const charactors = [
    {
        id:1,
        width: 800,
        height:1067,
        url:"/charactorimg/aromatic.jpg",
        alt:"Aromatic",
        header:"Aromatic",
    },{
        id:2,
        width: 800,
        height:1067,
        url:"/charactorimg/revitalising.jpg",
        alt:"Revitalising",
        header:"Revitalising",
    },{
        id:3,
        width: 800,
        height:1067,
        url:"/charactorimg/natural.jpg",
        alt:"Natural",
        header:"Natural",
    },{
        id:4,
        width: 800,
        height:1067,
        url:"/charactorimg/aquatic.jpg",
        alt:"Aquatic",
        header:"Aquatic",
    },{
        id:5,
        width: 800,
        height:1067,
        url:"/charactorimg/mediterranean.jpg",
        alt:"Mediterranean",
        header:"Mediterranean",
    },{
        id:6,
        width: 800,
        height:1067,
        url:"/charactorimg/descreet.jpg",
        alt:"Descreet",
        header:"Descreet",
    },{
        id:7,
        width: 800,
        height:1067,
        url:"/charactorimg/bouquet.jpg",
        alt:"Bouquet",
        header:"Bouquet",
    },{
        id:8,
        width: 800,
        height:1067,
        url:"/charactorimg/oriental.jpg",
        alt:"Oriental",
        header:"Oriental",
    },{
        id:9,
        width: 800,
        height:1067,
        url:"/charactorimg/classical.jpg",
        alt:"Classical",
        header:"Classical",
    },{
        id:10,
        width: 800,
        height:1067,
        url:"/charactorimg/noble-timber.jpg",
        alt:"Noble timber",
        header:"Noble timber",
    },{
        id:11,
        width: 800,
        height:1067,
        url:"/charactorimg/woody.jpg",
        alt:"Woody",
        header:"Woody",
    },{
        id:12,
        width: 800,
        height:1067,
        url:"/charactorimg/spicy.jpg",
        alt:"Spicy",
        header:"Spicy",
    },{
        id:12,
        width: 800,
        height:1067,
        url:"/charactorimg/smoky.jpg",
        alt:"Smoky",
        header:"Smoky",
    },{
        id:13,
        width: 800,
        height:1067,
        url:"/charactorimg/citric.jpg",
        alt:"Citric",
        header:"Citric",
    }
]

const femaleImpression = [
    {
        id:1,
        width: 800,
        height:1067,
        url:"/charactorimg/royal.jpg",
        alt:"Royal",
        header:"Royal",
    },{
        id:2,
        width: 800,
        height:1067,
        url:"/charactorimg/charismatic.jpg",
        alt:"Feminine",
        header:"Feminine",
    },{
        id:3,
        width: 800,
        height:1067,
        url:"/charactorimg/masculine.jpg",
        alt:"Sensual",
        header:"Sensual",
    },{
        id:4,
        width: 800,
        height:1067,
        url:"/charactorimg/extravagant.jpg",
        alt:"Glamorous",
        header:"Glamorous",
    },{
        id:5,
        width: 800,
        height:1067,
        url:"/charactorimg/casual-man.jpg",
        alt:"Natural",
        header:"Natural",
    },{
        id:6,
        width: 800,
        height:1067,
        url:"/charactorimg/dynamic.jpg",
        alt:"Casual",
        header:"Casual",
    }
]

const maleImpression = [
    {
        id:1,
        width: 800,
        height:1067,
        url:"/charactorimg/royal.jpg",
        alt:"Royal",
        header:"Royal",
    },{
        id:2,
        width: 800,
        height:1067,
        url:"/charactorimg/charismatic.jpg",
        alt:"Chrismatic",
        header:"Chrismatic",
    },{
        id:3,
        width: 800,
        height:1067,
        url:"/charactorimg/masculine.jpg",
        alt:"Masculine",
        header:"Masculine",
    },{
        id:4,
        width: 800,
        height:1067,
        url:"/charactorimg/extravagant.jpg",
        alt:"Extravagant",
        header:"Extravagant",
    },{
        id:5,
        width: 800,
        height:1067,
        url:"/charactorimg/casual-man.jpg",
        alt:"Casual",
        header:"Casual",
    },{
        id:6,
        width: 800,
        height:1067,
        url:"/charactorimg/dynamic.jpg",
        alt:"Dynamic",
        header:"Dynamic",
    }
]






export const isOrderValid = (oder) => {
    if(!oder) return {msg:"No oder", val: oder}

    if(!oder.type) return {msg:"No oder type", var: oder.type}

    if(oder.type = odertypes[0]){ //create your own
        if(!odertypes.includes(oder.CYO.name)) return { msg:"CYO-name", val:oder.CYO.name}

        if(!genders.includes(oder.CYO.gender)) return { msg:"CYO-gender", val:oder.CYO.gender}

        if(!charactors.some(e => e.id === oder.CYO.charactor.id)) return { msg:"CYO-charactor", val:oder.CYO.charactor}

        if(oder.CYO.gender == genders[0]){ //female
            if(!femaleImpression.some(e => e.id === oder.CYO.impression.id)) return { msg:"CYO-fImpression", val:oder.CYO.impression}
        }else if (oder.CYO.gender == genders[1]){ //male
            if(!maleImpression.some(e => e.id === oder.CYO.impression.id)) return { msg:"CYO-mImpression", val:oder.CYO.impression}
        }

        if(oder.CYO.ingredients.length > 5) return { msg:"CYO-ingredients-length", val: oder.CYO.ingredients.length}

        oder.CYO.ingredients.forEach((ing, index) => {
            if(!ingredienData.some(e=>e.id === ing.id)) return { msg:`CYO-ingredients[${index}]`, val: ing}
        });
    }

    if(!oder.bottle) return {msg:"No bottle desgin", val: oder.bottle}
    if(!oder.bottle.bottle) return  {msg:"No bottle", val: oder.bottle.bottle}

    if(!oder.box) return {msg:"No bottle desgin", val: oder.box}
    if(!oder.box.box) return  {msg:"No bottle", val: oder.box.box}

    if(!bottles.some(e => e.id === oder.bottle.bottle.id)) return {msg:"bottle", val: oder.bottle.bottle}

    if(!bottles.some(e => e.id === oder.box.box.id)) return {msg:"box", val: oder.bottle.bottle}

}