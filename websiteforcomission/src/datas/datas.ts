import { KeyIconPair } from "../types/types";
import { inkingimg1, inkingimg10, inkingimg11, inkingimg12, inkingimg2, inkingimg3, inkingimg4, inkingimg5, inkingimg6, inkingimg7, inkingimg8, inkingimg9 } from "./images";

const navbarData:KeyIconPair[] = [
    {
        content:"About me",
        icon:"solar:cat-bold",
        link:"/"
    },
    {
        content:"Inking",
        icon:"iconamoon:pen-fill",
        link:"inking"
    },
    {
        content:"Chibi",
        icon:"fluent:person-head-hint-16-filled",
        link:"chibi"
    },
    {
        content:"Other",
        icon:"icon-park-outline:other",
        link:"/"
    }
]

const openMenu:KeyIconPair = {
    content:"Menu",
    icon:"ic:round-menu",
    link:"#"
}

const InkingPrices = [
    {
        type: 'Headshot',
        price: '200,000'
    },
    {
        type: 'Bust-up',
        price: '250,000'
    },
    {
        type: 'Half-body',
        price: '310,000'
    },
    {
        type: 'Knee-up',
        price: '380,000'
    },
    {
        type: 'Fullbody',
        price: '450,000'
    },
    {
        type: 'Background',
        price: '+10,000 - 100,000'
    },
]

const InkingImages = [
    {
        img:inkingimg1,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg2,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg3,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg4,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg5,
        span:2,
        flexspan:'lg:w-2/7'
    },
    {
        img:inkingimg6,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg7,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg8,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg9,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg10,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg11,
        span:1,
        flexspan:'lg:w-1/7'
    },
    {
        img:inkingimg12,
        span:1,
        flexspan:'lg:w-1/7'
    },
]

const ChibiPrices = [
    {
        type: 'Headshot',
        price: '100,000'
    },
    {
        type: 'Half-body',
        price: '170,000'
    },
    {
        type: 'Fullbody',
        price: '250,000'
    },
    {
        type: 'Background',
        price: '+10,000 - 50,000'
    },
]

export {navbarData, openMenu, InkingPrices, InkingImages, ChibiPrices}